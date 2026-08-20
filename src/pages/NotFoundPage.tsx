import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { RoutePath } from "../routes/routes";

export default function NotFoundPage() {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  return (
    <main className="grid min-h-screen place-items-center bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-5 text-indigo-400 backdrop-blur-md">
          404 Error
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-400 max-w-md mx-auto">
          Désolé, nous n'avons pas trouvé la page que vous recherchez. Peut-être
          avez-vous mal orthographié l'URL ?
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={isAuthenticated ? RoutePath.HOMEPAGE : RoutePath.GUESTPAGE}
            className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-200"
          >
            Retournez
          </Link>
        </div>
      </div>
    </main>
  );
}
