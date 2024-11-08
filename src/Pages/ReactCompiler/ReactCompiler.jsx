import './Main.css';

export const ReactCompiler = () => {

    return(
        <div className="Main">
            <h2>React Compiler</h2>
            <p>
            This page will give you an introduction to React Compiler and how to try it out successfully. React Compiler is a new compiler that we’ve open sourced to get early feedback from the community. It is a build-time only tool that automatically optimizes your React app. It works with plain JavaScript, and understands the Rules of React, so you don’t need to rewrite any code to use it.

            The compiler also includes an ESLint plugin that surfaces the analysis from the compiler right in your editor. We strongly recommend everyone use the linter today. The linter does not require that you have the compiler installed, so you can use it even if you are not ready to try out the compiler.
            </p>
        </div>
    )
}

