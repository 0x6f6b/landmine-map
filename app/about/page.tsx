import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <section className="w-full px-24 pt-8 md:pt-16 lg:pt-24 border-t">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          About Us
        </h1>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16 flex justify-center">
        <div className="grid items-start sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 text-center gap-6">
          <div className="bg-gray-100 p-4 rounded grid h-full">
            <NonProfitIcon />
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a non-profit organisation with a mission to help volunteers
              stay safe while clearing landmines in Cambodia.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded grid h-full">
            <HandshakeIcon />
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We work closely with local volunteers on the ground. This allows
              us to communicate with the local community and provide the most
              accurate data.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded grid h-full">
            <ReviewerIcon />
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We use expert reviewers to verify the data we collect. This
              protects against false positives and abuse of the reporting
              system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function NonProfitIcon() {
  return (
    <div className="mx-auto w-fit h-fit inline-block rounded-lg bg-green-100 px-3 py-1 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M574-618q-12-30-35.5-47T482-682q-18 0-35 5t-31 19l-58-58q14-14 38-25.5t44-14.5v-84h80v82q45 9 79 36.5t51 71.5l-76 32ZM792-56 608-240q-15 15-41 24.5T520-204v84h-80v-86q-56-14-93.5-51T292-350l80-32q12 42 40.5 72t75.5 30q18 0 33-4.5t29-13.5L56-792l56-56 736 736-56 56Z" />
      </svg>
    </div>
  );
}

function HandshakeIcon() {
  return (
    <div className="mx-auto w-fit h-fit rounded-lg bg-green-100 px-3 py-1 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
      </svg>
    </div>
  );
}

function ReviewerIcon() {
  return (
    <div className="mx-auto w-fit h-fit inline-block rounded-lg bg-green-100 px-3 py-1 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560ZM884-20 756-148q-21 12-45 20t-51 8q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 27-8 51t-20 45L940-76l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-540 40v-111q0-34 17-63t47-44q51-26 115-44t142-18q-12 18-20.5 38.5T407-359q-60 5-107 20.5T221-306q-10 5-15.5 14.5T200-271v31h207q5 22 13.5 42t20.5 38H120Zm320-480Zm-33 400Z" />
      </svg>
    </div>
  );
}
