<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TenantHomeController extends Controller
{
    /**
     * Display the tenant home page (Family Profile).
     */
    public function index(Request $request): Response
    {
        $tenant = tenant();
        $user = $request->user();

        // If authenticated as a member/admin, show the Frontend App Dashboard
        if ($user) {
            return Inertia::render('Tenant/Frontend/App', [
                'tenantName' => $tenant->name ?? $tenant->slug,
                'member' => $request->attributes->get('currentTenantMember'),
            ]);
        }

        // Otherwise show the Public Landing Page
        return Inertia::render('Tenant/Frontend/Landing', [
            'tenant' => [
                'name' => $tenant->name ?? $tenant->slug,
                'display_name' => $tenant->display_name,
                'slug' => $tenant->slug,
            ],
            'stats' => [
                'members_count' => $tenant->members()->count(),
            ],
        ]);
    }
}
