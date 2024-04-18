// "use server";
// import { signIn } from "@/auth";

// export const login = async (values: any) => {
//   try {
//     // Redirect to the settings page after successful login
//     // const redirectUrl = "/settings";  // URL to redirect after login
//     const result = await signIn('telegram-login', {
//       // redirect: false,
//       // callbackUrl: redirectUrl
//     });

//     // Handle the redirection manually if redirect: false
//     if (result.url) {
//       window.location.href = result.url;
//     } else {
//       console.log("Login failed or already logged in");
//     }
//   } catch (error) {
//     console.error('Error in sign in:', error);
//   }
// }