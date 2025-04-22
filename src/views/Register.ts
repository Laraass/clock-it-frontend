import { InputField } from "../components/Inputfield";
import { Button } from "../components/Button";

export function Register(): string {
  return `
    <section class="w-full max-w-md mx-auto flex flex-col gap-4">
      <h1 class="text-2xl font-bold text-shade-800">Register account</h1>
      
      <form class="flex flex-col gap-6">
        ${InputField({
          title: "Name",
          placeholder: "Enter your name",
          name: "name",
        })}

        ${InputField({
          title: "E-mail",
          placeholder: "Enter your e-mail",
          name: "email",
        })}

        ${InputField({
          title: "Password",
          placeholder: "Enter your password",
          name: "password",
          type: "default",
        })}

        <div class="flex flex-col gap-3">
          <div class="mx-auto">
            ${Button({ text: "Register", id: "register-button" })}
          </div>

          <p class="text-center text-sm">
            Already have an account? 
            <a
              id="go-to-sign-in"
              href="#/signin"
              class="underline cursor-pointer text-shade-800 inline-block
                     hover:scale-102 active:scale-102 transition-transform duration-300"
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </section>
  `;
}
