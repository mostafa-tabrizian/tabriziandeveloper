import langDecider from '@/lib/langDecider'
import Image from 'next/image'
import Link from 'next/link'

const TicIcon = () => (
   <svg
      className='h-5 w-5 min-w-fit text-purple-500'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
   >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
   </svg>
)

const XIcon = () => (
   <svg
      className='h-5 w-5 min-w-fit text-gray-500'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
   >
      {' '}
      <path stroke='none' d='M0 0h24v24H0z' /> <line x1='18' y1='6' x2='6' y2='18' />{' '}
      <line x1='6' y1='6' x2='18' y2='18' />
   </svg>
)

const Packages = ({ lang }: { lang: string }) => {
   return (
      <div
         id='packages'
         className='relative mx-auto mb-32 grid min-h-screen max-w-screen-lg items-center justify-center md:mb-0'
      >
         {langDecider(
            lang,
            <h2 className='Audiowide mx-auto mb-32 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
               Packages
            </h2>,
            <h2 className='yekanBold mx-auto mb-32 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-[1.5rem] text-transparent'>
               پکیج ها
            </h2>,
         )}
         <div
            className={`${langDecider(
               lang,
               '',
               'rtl',
            )} mx-7 grid space-y-36 md:mx-0 md:grid-cols-3 md:gap-3 md:space-y-0 lg:mx-7 lg:gap-10`}
         >
            <div className='relative block rounded-3xl bg-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-700 before:p-2'>
               <div className='my-10 space-y-5'>
                  <Image
                     src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/green_gem.png'
                     width={56}
                     height={114}
                     alt='diamond'
                     className={`animate-wave absolute -top-16 ${langDecider(
                        lang,
                        'right-10',
                        'left-10',
                     )}`}
                     style={{
                        filter: 'drop-shadow(0px 5px 10px #255123)',
                        animationDuration: '3s',
                     }}
                  />
                  <div className='relative z-10'>
                     {langDecider(
                        lang,
                        <h3 className='verdana'>Startup</h3>,
                        <h3 className='yekanBold'>پلن استارآپ</h3>,
                     )}
                  </div>
                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Ready-To-Go Templates</span>,
                           <span className='yekan z-10 text-sm'>انتخاب میان قالب های آماده</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>6 Month Support</span>,
                           <span className='yekan z-10 text-sm'>۶ ماه پشتیبانی رایگان</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Split Payment in 2</span>,
                           <span className='yekan z-10 text-sm'>پرداخت در ۲ مرحله</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Delivery Time In 7 Business Days</span>,
                           <span className='yekan z-10 text-sm'>
                              زمان تحویل (روز کاری): ۷ روز{' '}
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Basic Technical SEO</span>,
                           <span className='yekan z-10 text-sm'>سئو تکنیکال پایه</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Basic Panel Of Sales and Products Statistics
                           </span>,
                           <span className='yekan z-10 text-sm'>پنل پایه آمار فروش و محصولات</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              احراز هویت پایه از طریق حساب گوگل
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              اتصال درگاه پرداخت از ۱۱ بانک
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>سیستم تیکت و چت آنلاین</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              تشخیص بات بودن کاربران و مسدودی آنها
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              هوش مصنوعی برای پیشنهاد محصولات مرتبط به علایق کاربران
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              پیاده سازی پنل Google Analytics برای آمار و بررسی عملکرد سایت در گوگل{' '}
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              PWA: تبدیل سایت به اپلیکیشن تحت وب موبایل
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              وصل کردن سایت به تُرب و افزودن خودکار محصولات
                           </span>,
                        )}
                     </div>
                  </div>
                  <div>
                     <div className='mt-8 text-center'>
                        {langDecider(
                           lang,
                           <Link
                              href='/en/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='verdana text-base'>Get This Right Now</span>{' '}
                           </Link>,
                           <Link
                              href='/fa/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین الان شروع کن
                              </span>
                           </Link>,
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className='relative -top-5 block rounded-3xl bg-gradient-to-b from-indigo-950 to-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-400 before:p-2'>
               <div className='my-10 space-y-5'>
                  <Image
                     src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/blue_gem.png'
                     width={56}
                     height={114}
                     alt='blue gem'
                     className={`animate-wave absolute -top-16 ${langDecider(
                        lang,
                        'right-10',
                        'left-10',
                     )}`}
                     style={{ filter: 'drop-shadow(0px 5px 6px #527feb)', animationDuration: '3s' }}
                  />
                  <div>
                     {langDecider(
                        lang,
                        <h3 className='verdana'>Advanced</h3>,
                        <h3 className='yekanBold'>پنل حرفه ای</h3>,
                     )}
                  </div>
                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Advanced Customization</span>,
                           <span className='yekan z-10 text-sm'>سفارشی سازی قالب های آماده</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>12 Months of Free Support</span>,
                           <span className='yekan z-10 text-sm'>۱۲ ماه پشتیبانی رایگان</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Split Payment in 3</span>,
                           <span className='yekan z-10 text-sm'>پرداخت در ۳ مرحله</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Delivery Time (Business Days): 20 days
                           </span>,
                           <span className='yekan z-10 text-sm'>
                              زمان تحویل (روز کاری): ۱۴ روز
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Advanced SEO & Google Analytics</span>,
                           <span className='yekan z-10 text-sm'>سئو تکنیکال پیشرفته</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Advanced Content Management System (CMS)
                           </span>,
                           <span className='yekan z-10 text-sm'>پنل آمار اختصاصی و سفارشی</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>احراز هویت قوی از طریق پیامک</span>,
                        )}
                     </div>

                     

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              اتصال درگاه پرداخت از ۱۱ بانک
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>سیستم تیکت و چت آنلاین</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              تشخیص بات بودن کاربران و مسدودی آنها
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              هوش مصنوعی برای پیشنهاد محصولات مرتبط به علایق کاربران
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              پیاده سازی پنل Google Analytics برای آمار و بررسی عملکرد سایت در گوگل{' '}
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              PWA: تبدیل سایت به اپلیکیشن تحت وب موبایل
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <XIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              وصل کردن سایت به تُرب و افزودن خودکار محصولات
                           </span>,
                        )}
                     </div>
                  </div>
                  <div>
                     <div className='mt-8 text-center'>
                        {langDecider(
                           lang,
                           <Link
                              href='/en/#contact'
                              className='-mb-10 flex justify-center rounded-full border-2 border-white bg-violet-500 px-6 py-2'
                           >
                              <span className='verdana text-base'>Get This Right Now</span>{' '}
                           </Link>,
                           <Link
                              href='/fa/#contact'
                              className='-mb-10 flex justify-center rounded-full border-2 border-white bg-violet-500 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین الان شروع کن
                              </span>
                           </Link>,
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className='relative block rounded-3xl bg-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-700 before:p-4'>
               <div className='my-10 space-y-5'>
                  <Image
                     src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/purple_gem.png'
                     width={80}
                     height={123}
                     alt='purple gem'
                     className={`animate-wave absolute -top-16 ${langDecider(
                        lang,
                        'right-10',
                        'left-10',
                     )}`}
                     style={{
                        filter: 'drop-shadow(0px 5px 10px #9b3aad)',
                        animationDuration: '3s',
                     }}
                  />
                  <div>
                     <h3 className='verdana'>VIP</h3>
                  </div>

                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>Full Customizatio</span>,
                           <span className='yekan z-10 text-sm'>طراحی اختصاصی</span>,
                        )}
                     </div>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>12 Months of Free Support</span>,
                           <span className='yekan z-10 text-sm'>
                              ۱۸ ماه پشتیبانی فوری + تماس تلفنی
                           </span>,
                        )}
                     </div>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'> Split Payment in 4</span>,
                           <span className='yekan z-10 text-sm'>پرداخت در ۴ مرحله</span>,
                        )}
                     </div>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Delivery Time (Business Days): 30 day
                           </span>,
                           <span className='yekan z-10 text-sm'>
                              زمان تحویل (روز کاری): ۳۰ روز
                           </span>,
                        )}
                     </div>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Advanced SEO & Google Analytics + SEO Consulting
                           </span>,
                           <span className='yekan z-10 text-sm'>سئو تکنیکال پیشرفته</span>,
                        )}
                     </div>
                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'>
                              Custom Content Management System (CMS)
                           </span>,
                           <span className='yekan z-10 text-sm'>پنل آمار اختصاصی و سفارشی</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>احراز هویت قوی از طریق پیامک</span>,
                        )}
                     </div>

                     

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              اتصال درگاه پرداخت از ۱۱ بانک
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>سیستم تیکت و چت آنلاین</span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              تشخیص بات بودن کاربران و مسدودی آنها
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              هوش مصنوعی برای پیشنهاد محصولات مرتبط به علایق کاربران
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              پیاده سازی پنل Google Analytics برای آمار و بررسی عملکرد سایت در گوگل{' '}
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              PWA: تبدیل سایت به اپلیکیشن تحت وب موبایل
                           </span>,
                        )}
                     </div>

                     <div className='flex gap-2'>
                        <TicIcon />
                        {langDecider(
                           lang,
                           <span className='z-10 text-sm'></span>,
                           <span className='yekan z-10 text-sm'>
                              وصل کردن سایت به تُرب و افزودن خودکار محصولات
                           </span>,
                        )}
                     </div>
                  </div>
                  <div>
                     <div className='mt-8 text-center'>
                        {langDecider(
                           lang,
                           <Link
                              href='/en/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='verdana text-base'>Get This Right Now</span>{' '}
                           </Link>,
                           <Link
                              href='/fa/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین الان شروع کن
                              </span>
                           </Link>,
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <span
            className='absolute -bottom-1/3 left-3/4 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #2b1e4e 0%, #ffffff00 100%)',
            }}
         ></span>
         <span
            className='absolute -top-1/3 right-full rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background:
                  'radial-gradient(45.87% 46.18% at 55.13% 52.17%, #2E3F62 0%, rgba(12, 15, 22, 0.00) 100%)',
            }}
         ></span>
      </div>
   )
}

export default Packages
