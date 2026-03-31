<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as Middleware;
use Illuminate\Http\Request;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array<int, string>|string|null
     */
    protected $proxies = '*';

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers =
        Request::HEADER_X_FORWARDED_FOR |
        Request::HEADER_X_FORWARDED_HOST |
        Request::HEADER_X_FORWARDED_PORT |
        Request::HEADER_X_FORWARDED_PROTO |
        Request::HEADER_X_FORWARDED_AWS_ELB;

    /**
     * Set the trusted proxies.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string|null  $proxies
     * @return void
     */
    protected function setTrustedProxies($proxies)
    {
        parent::setTrustedProxies($proxies);
        
        // Force HTTPS if X-Forwarded-Proto is https
        if (request()->header('X-Forwarded-Proto') === 'https') {
            $_SERVER['HTTPS'] = 'on';
        }
    }
}
