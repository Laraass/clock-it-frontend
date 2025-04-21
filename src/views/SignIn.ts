import { InputField } from "../components/Inputfield";
import { Button } from "../components/Button";

export function SignIn(): string {
  return `
    <section class="w-full max-w-md mx-auto mt-16 flex flex-col gap-8">
      <h1 class="text-xl font-bold text-center text-shade-800">Sign In</h1>
      
      <form class="flex flex-col gap-6">
        ${InputField({
          title: "E-mail",
          placeholder: "Enter your e-mail",
        })}

        ${InputField({
          title: "Password",
          placeholder: "Enter your password",
        })}

        <div class="mt-4">
          ${Button("Sign in")}
        </div>
      </form>
    </section>
  `;
}
