<?php

namespace App\Http\Middleware;

use App\Models\Tenant;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ResolveTenant
{
    public function handle(Request $request, Closure $next): Response
    {
        $routeTenant = $request->route('tenant');

        if (!$routeTenant) {
            // Try to identify by subdomain if route parameter is missing
            $host = $request->getHost();
            $centralDomains = config('tenancy.central_domains', []);
            
            // Skip identification if host is exactly one of the central domains
            if (in_array($host, $centralDomains)) {
                return $next($request);
            }

            $subdomain = null;
            foreach ($centralDomains as $centralDomain) {
                if (str_ends_with($host, '.' . $centralDomain)) {
                    $subdomain = substr($host, 0, strpos($host, '.' . $centralDomain));
                    break;
                }
            }

            if ($subdomain) {
                $routeTenant = $subdomain;
            }
        }

        $tenant = $routeTenant instanceof Tenant
            ? $routeTenant
            : Tenant::query()->where('slug', (string) $routeTenant)->firstOrFail();

        $request->attributes->set('currentTenant', $tenant);
        app()->instance('currentTenant', $tenant);
        app()->instance(Tenant::class, $tenant); // Ensure Tenant model is bound
        
        // Initialize Stancl Tenancy
        tenancy()->initialize($tenant);

        \Illuminate\Support\Facades\URL::defaults(['tenant' => $tenant->slug]);

        return $next($request);
    }
}

