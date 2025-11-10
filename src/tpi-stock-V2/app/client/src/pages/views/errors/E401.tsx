/**
 * @file E401.tsx
 * @description Displays the 401 error page
 * @author Damien Loup
 */

// Import libraries
import Main from "../../includes/Main";

/**
 * Displays the 401 error page
 * @returns => E401 component
 */
function E401() 
{
    return (
        <Main>
            <div className="flex items-center justify-center w-full">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold">
                            401 - Unauthorized
                        </h2>
                        <p className="mt-2 text-center text-sm">
                            You do not have the necessary permissions to access this page.
                        </p>
                    </div>
                    <div className="mt-6">
                        <a href="/home" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-colorpalette-texts-default bg-colorpalette-button-color hover:bg-opacity-80">
                            Go back to home
                        </a>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default E401;