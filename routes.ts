/**
 * An array of piblic routes 
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
]

/**
 * Authentification routes are used to register
 *  or authentificate the user
 * these routes will redirect users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login"
];

/**
 * The prefix which is used for authentification routes
 * Routes that start with this prefix are used for API
 * authentification puproses
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";