import classNames from 'classnames'

export interface LogoProps {
  className?: string
  smLogoClassName?: string
  mdLogoClassName?: string
}

export const Logo = (props: LogoProps) => {
  const { className, smLogoClassName, mdLogoClassName } = props

  return (
    <>
      <svg
        className={classNames('w-[21px] h-auto md:hidden', className, smLogoClassName)}
        viewBox='0 0 31 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='15.5' cy='24.0685' rx='15.5' ry='15.5001' fill='#8050E3' />
        <path
          d='M13.6924 7.94141C13.4621 13.2229 13.5609 25.3245 15.7981 31.4787'
          stroke='#DECEFF'
          strokeWidth='2.81819'
          strokeLinecap='round'
        />
        <path
          d='M14.0593 9.23711C13.8235 6.19734 12.8601 -0.723185 6.49316 4.02736C8.69241 3.91155 12.4047 6.41425 14.0593 9.23711Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
        <path
          d='M13.9685 10.2332C12.2919 7.14794 8.01633 2.9633 4.32743 10.907C6.33203 9.76587 11.0667 8.03356 13.9685 10.2332Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
        <path
          d='M14.7748 10.7059C11.9994 9.17763 6.37544 8.45568 7.52402 16.2214C8.46377 14.4002 11.5177 10.4329 14.7748 10.7059Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
        <path
          d='M14.0139 9.73577C14.1234 7.38332 15.5101 -0.362796 21.1718 2.84917C19.2637 2.91181 15.3589 7.45219 14.0139 9.73577Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
        <path
          d='M13.969 10.2339C15.5751 6.96719 19.7488 2.44803 23.5947 10.5055C21.572 9.41315 16.8152 7.82956 13.969 10.2339Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
        <path
          d='M13.923 10.7319C16.6594 9.14568 22.0897 8.20481 20.9002 15.8206C19.9924 14.076 17.1221 10.3538 13.923 10.7319Z'
          fill='#DECEFF'
          stroke='#B18CFF'
        />
      </svg>
      <svg
        className={classNames('w-[101px] h-auto hidden md:block', className, mdLogoClassName)}
        viewBox='0 0 150 40'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse rx='15.5' ry='15.5001' transform='translate(15.5 24.0685)' fill='#8050e3' />
        <path
          d='M13.6924,7.94141c-.2303,5.28149-.1315,17.38309,2.1057,23.53729'
          fill='none'
          stroke='#deceff'
          strokeWidth='2.81819'
          strokeLinecap='round'
        />
        <path
          d='M14.0593,9.23711c-.2358-3.03977-1.1992-9.960295-7.56614-5.20975c2.19925-.11581,5.91154,2.38689,7.56614,5.20975Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M13.9685,10.2332c-1.6766-3.08526-5.95217-7.2699-9.64107.6738c2.0046-1.14113,6.73927-2.87344,9.64107-.6738Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M14.7748,10.7059c-2.7754-1.52827-8.39936-2.25022-7.25078,5.5155.93975-1.8212,3.99368-5.7885,7.25078-5.5155Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M14.0139,9.73577c.1095-2.35245,1.4962-10.098566,7.1579-6.8866-1.9081.06264-5.8129,4.60302-7.1579,6.8866Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M13.969,10.2339c1.6061-3.26671,5.7798-7.78587,9.6257.2716-2.0227-1.09235-6.7795-2.67594-9.6257-.2716Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M13.923,10.7319c2.7364-1.58622,8.1667-2.52709,6.9772,5.0887-.9078-1.7446-3.7781-5.4668-6.9772-5.0887Z'
          fill='#deceff'
          stroke='#b18cff'
        />
        <path
          d='M35.6793,22.3018c0-6.5887,4.7207-11.1057,10.9698-11.1057c6.5548,0,10.0529,4.1774,10.4605,9.5095l-5.5359.2037c-.3396-2.3773-1.6302-4.5849-4.9585-4.5849-3.1585,0-4.9925,2.3434-4.9925,5.9774s1.834,5.9774,4.9925,5.9774c3.3283,0,4.6189-2.2076,4.9585-4.5849l5.5359.2377c-.4076,5.3321-3.9057,9.4756-10.4605,9.4756-6.2491,0-10.9698-4.5171-10.9698-11.1058ZM67.9757,26.683v-.2378l-2.2415.4076c-1.3245.2717-2.1057.6792-2.1057,1.6641c0,.7812.6114,1.2906,1.5284,1.2906c1.5622,0,2.8188-1.1547,2.8188-3.1245Zm5.4001-3.2944v5.1623c0,.7811.3396,1.1208.917,1.1208.4415,0,.7811-.068,1.2226-.2378v2.9208c-.7811.5434-1.8679.9849-3.4302.9849-1.8679,0-3.3283-.9509-3.8378-2.683-.883,1.766-2.6151,2.683-5.0264,2.683-2.9548,0-4.8906-1.5283-4.8906-4.1094c0-2.9208,2.1057-4.1774,5.4-4.7548l4.2453-.7132v-.2377c0-1.2567-.5773-2.0038-1.9019-2.0038-1.2226,0-1.8339.7811-2.0717,1.9019l-5.0944-.3397c.4755-3.3283,2.9548-5.6377,7.5058-5.6377c4.0075,0,6.9623,1.7321,6.9623,5.9434Zm9.2495,1.9359v.2037c0,2.2076,1.1886,3.634,3.0566,3.634c2.1396,0,3.1245-1.5283,3.1245-3.7358c0-2.1736-.9849-3.702-3.1245-3.702-1.868,0-3.0566,1.4265-3.0566,3.6001Zm-.3057,5.0604L81.3686,33h-4.2453v-21.3964h5.502v8.8642c.7471-1.8,2.4453-3.0226,4.9924-3.0226c4.4491,0,6.7246,3.5321,6.7246,7.9812c0,4.483-2.2755,7.9812-6.8264,7.9812-2.4453,0-4.3472-1.1887-5.1963-3.0227ZM105.288,26.683v-.2378l-2.241.4076c-1.325.2717-2.106.6792-2.106,1.6641c0,.7812.611,1.2906,1.528,1.2906c1.562,0,2.819-1.1547,2.819-3.1245Zm5.4-3.2944v5.1623c0,.7811.34,1.1208.917,1.1208.442,0,.781-.068,1.223-.2378v2.9208c-.781.5434-1.868.9849-3.43.9849-1.868,0-3.329-.9509-3.838-2.683-.883,1.766-2.615,2.683-5.027,2.683-2.9544,0-4.8903-1.5283-4.8903-4.1094c0-2.9208,2.1057-4.1774,5.4003-4.7548l4.245-.7132v-.2377c0-1.2567-.577-2.0038-1.902-2.0038-1.222,0-1.834.7811-2.072,1.9019l-5.0939-.3397c.4755-3.3283,2.9547-5.6377,7.5059-5.6377c4.007,0,6.962,1.7321,6.962,5.9434Zm9.25,2.1736v7.4378h-5.502v-15.1473h5.502v2.2755c.815-1.6642,2.615-2.683,4.89-2.683c4.144,0,5.468,2.8868,5.468,6.0453v9.5095h-5.502v-8.0491c0-2.0717-.577-3.1585-2.241-3.1585-1.868,0-2.615,1.4943-2.615,3.7698Zm21.933,1.1208v-.2378l-2.242.4076c-1.324.2717-2.105.6792-2.105,1.6641c0,.7812.611,1.2906,1.528,1.2906c1.562,0,2.819-1.1547,2.819-3.1245Zm5.4-3.2944v5.1623c0,.7811.339,1.1208.917,1.1208.441,0,.781-.068,1.222-.2378v2.9208c-.781.5434-1.868.9849-3.43.9849-1.868,0-3.328-.9509-3.838-2.683-.883,1.766-2.615,2.683-5.026,2.683-2.955,0-4.891-1.5283-4.891-4.1094c0-2.9208,2.106-4.1774,5.4-4.7548l4.246-.7132v-.2377c0-1.2567-.578-2.0038-1.902-2.0038-1.223,0-1.834.7811-2.072,1.9019l-5.094-.3397c.475-3.3283,2.954-5.6377,7.505-5.6377c4.008,0,6.963,1.7321,6.963,5.9434Z'
          fill='#deceff'
        />
      </svg>
    </>
  )
}
