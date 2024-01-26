import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto sm:max-w-3xl">
      <div className="flex items-center justify-center p-3 mx-auto">
        <div className="flex items-center justify-between gap-1">
          <Link href={`/`}>
            <Image
              src="/assets/logo.png"
              className="w-6 h-6 dark:invert"
              alt=""
              width={24}
              height={24}
            />
          </Link>
          <h4 className="text-lg font-bold -translate-x-2 dark:text-white">
            phlud
          </h4>
          <span className="-translate-x-2">💋</span>
        </div>
      </div>
    </header>
  )
}

export default Header
