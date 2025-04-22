import { InputField } from "../components/Inputfield";
import { Button } from "../components/Button";

export function SignIn(): string {
  return `
    <section class="w-full max-w-md mx-auto flex flex-col gap-10">
      <img src="./clockit_logo.svg" class="mx-auto w-80 pt-6" />
      
      <form class="flex flex-col gap-6">
        ${InputField({
          title: "E-mail",
          placeholder: "Enter your e-mail",
          name: "email",
        })}

        ${InputField({
          title: "Password",
          placeholder: "Enter your password",
          name: "password",
        })}

        <div class="flex flex-col gap-3">
          <div class="mx-auto">
            ${Button({ text: "Sign in", id: "sign-in-button" })}
          </div>

          <p class="text-center text-sm">
            Don't have an account? 
            <a
              id="go-to-register"
              href="#/register"
              class="underline cursor-pointer text-shade-800 inline-block
                     hover:scale-102 active:scale-102 transition-transform duration-300"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </section>
  `;
}
