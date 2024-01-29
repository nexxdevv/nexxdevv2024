import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto sm:max-w-3xl">
      <div className="flex items-center justify-center p-3 mx-auto scale-110">
        <div className="flex items-center justify-between">
          <p className="font-extrabold dark:text-white">@nexxdevv</p>
          <Link href={`/`} className="-translate-x-px translate-y-px">
            <Image
              src="/assets/logo.png"
              className="w-5 h-5 dark:invert"
              alt=""
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
