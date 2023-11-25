interface PropsIcon {
  customClass: string;
}

export const Arrow = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export const Warn = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={customClass}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const Chevron = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
export const Trending = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={customClass}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 144h112v112"
      />
      <path
        d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export const Github = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={customClass}
    >
      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
    </svg>
  );
};

export const Usdt = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 2000"
      width="2000"
      height="2000"
      className={customClass}
    >
      <path
        d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
        fill="#53ae94"
      />
      <path
        d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
        fill="#fff"
      />
    </svg>
  );
};

export const Atom = ({ customClass }: PropsIcon) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 486 486"
      width="2500"
      height="2500"
      className={customClass}
    >
      <circle cx="243" cy="243" r="243" fill="#2e3148" />
      <circle cx="243" cy="243" r="141" fill="#1b1e36" />
      <path
        d="M243.5 31c-26.23 0-47.5 95.14-47.5 212.5S217.27 456 243.5 456 291 360.86 291 243.5 269.73 31 243.5 31zm3.28 413c-3 4-6 1-6 1-12.08-14-18.12-40-18.12-40-21.13-68-16.1-214-16.1-214 9.93-115.91 28-143.29 34.14-149.37a3.75 3.75 0 0 1 4.81-.38c8.92 6.32 16.4 32.75 16.4 32.75C284 156 282 233 282 233c2 67-11.07 142-11.07 142-10.06 57-24.15 69-24.15 69z"
        fill="#6f7390"
      />
      <path
        d="M427.82 137.75c-13.06-22.76-106.16 6.14-208 64.55S46.13 326.5 59.18 349.25s106.16-6.14 208-64.55 173.69-124.2 160.64-146.95zM71.22 346.12c-5-.63-3.87-4.74-3.87-4.74C73.48 323.94 93 305.76 93 305.76c48.49-52.17 177.64-120.46 177.64-120.46 105.47-49.07 138.23-47 146.54-44.72a3.75 3.75 0 0 1 2.73 4c-1 10.88-20.25 30.52-20.25 30.52-60.1 60-127.89 96.59-127.89 96.59-57.12 35.09-128.68 61.06-128.68 61.06-54.45 19.62-71.87 13.37-71.87 13.37z"
        fill="#6f7390"
      />
      <path
        d="M427.36 350c13.16-22.7-58.5-88.8-160-147.64S72.79 114.26 59.64 137s58.5 88.8 160.05 147.64 194.52 88.1 207.67 65.36zm-359-204.23c-1.95-4.61 2.16-5.72 2.16-5.72 18.17-3.43 43.69 4.38 43.69 4.38 69.43 15.81 193.23 93.36 193.23 93.36 95.32 66.7 109.94 96.08 112.13 104.42a3.75 3.75 0 0 1-2.08 4.36c-9.94 4.55-36.56-2.23-36.56-2.23-82.05-22-147.67-62.31-147.67-62.31C174.3 250.23 116 201.3 116 201.3c-44.3-37.3-47.62-55.49-47.62-55.49z"
        fill="#6f7390"
      />
      <circle cx="243" cy="243" r="25" fill="#b7b9c8" />
      <ellipse cx="345.5" cy="147" rx="14.5" ry="15" fill="#b7b9c8" />
      <ellipse cx="107.5" cy="198" rx="14.5" ry="15" fill="#b7b9c8" />
      <ellipse cx="213.5" cy="382" rx="14.5" ry="15" fill="#b7b9c8" />
    </svg>
  );
};

export const Doge = ({ customClass }: PropsIcon) => {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <circle cx="42" cy="42" r="42" fill="#C2A633" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.1114 63.9709H42.6114H42.6118C42.6118 63.9709 63 65.7071 63 42.3538C63 19.906 44.3818 19.9856 40.7834 20.0009C40.6992 20.0013 40.6232 20.0016 40.5558 20.0016H28.111V39.5881H23V44.3857H28.1114V63.9709ZM36.2785 28.1289H41.9993C44.1389 28.1289 54.9038 29.0039 54.921 42.5121C54.938 55.8594 44.0846 55.8456 42.3387 55.8434C42.3176 55.8433 42.2979 55.8433 42.2795 55.8433H36.2785V44.3853H45.2788V39.5877H36.2785V28.1289Z"
        fill="white"
      />
    </svg>
  );
};

export const Ltc = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      viewBox="0.847 0.876 329.254 329.256"
      className={customClass}
    >
      <path
        d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"
        fill="#bebebe"
      />
      <path
        d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"
        fill="#bebebe"
      />
      <path
        d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"
        fill="#fff"
      />
    </svg>
  );
};

export const Ripple = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 2500 2500"
      className={customClass}
    >
      <g id="Layer_x0020_1">
        <g id="_2082244081712">
          <circle cx="1250" cy="1250" r="1250"></circle>
          <path
            fill="#FFFFFF"
            d="M1820.4,549.8h233.2l-485.5,503.4c-175.8,182.3-460.8,182.3-636.2,0L446.3,549.8h233.2l368.7,382.4    c111.5,115.3,291.8,115.3,403,0L1820.4,549.8L1820.4,549.8z M676.6,1950.2H443.3l488.6-506.8c175.8-182.3,460.8-182.3,636.6,0    l488.6,506.8h-233.3l-371.8-385.8c-111.5-115.3-291.8-115.3-403,0L676.6,1950.2z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const Cardano = ({ customClass }: PropsIcon) => {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <circle cx="42" cy="42" r="42" fill="#0033AD" />
      <path
        d="M41.3376 17.1477C42.5145 16.5339 43.9512 17.9577 43.3258 19.1335C42.9627 20.092 41.5857 20.3469 40.8823 19.6163C40.1371 18.9151 40.3801 17.5292 41.3376 17.1477ZM28.6786 18.5122C29.3935 18.2179 30.2986 18.873 30.2257 19.6522C30.3015 20.4981 29.2672 21.1207 28.5384 20.7187C27.5729 20.3447 27.6833 18.7774 28.6786 18.5122ZM54.6057 20.7424C53.4884 20.6074 53.3116 18.8508 54.3872 18.4971C55.2215 18.0902 55.987 18.8532 56.109 19.6441C55.9341 20.3194 55.3687 20.9377 54.6057 20.7424ZM31.5589 23.9001C32.7542 23.1441 34.4598 24.27 34.276 25.6583C34.2139 27.0602 32.3519 27.8724 31.3014 26.9247C30.2856 26.1803 30.4395 24.4725 31.5589 23.9001ZM49.8059 24.7023C50.3391 23.328 52.4999 23.2864 53.1069 24.6242C53.7068 25.6654 52.9689 26.9546 51.9 27.3086C50.4841 27.5729 49.1392 26.0423 49.8059 24.7023ZM39.8131 27.2306C39.8015 26.0493 40.8775 25.1691 42.0001 25.0886C42.7448 25.238 43.5564 25.5552 43.8758 26.3066C44.4712 27.3432 43.9425 28.7704 42.8668 29.2461C42.3749 29.5218 41.7933 29.4184 41.2576 29.3863C40.4387 28.9842 39.7491 28.1958 39.8131 27.2306ZM20.9873 28.9518C22.0792 28.2806 23.5523 29.5056 23.139 30.6917C22.9113 31.7177 21.5322 32.1351 20.7438 31.4801C19.9022 30.8664 20.0356 29.3908 20.9873 28.9518ZM61.4132 28.9497C62.3396 28.2304 63.8683 29.0555 63.7579 30.2251C63.82 31.2916 62.4983 32.096 61.5787 31.5468C60.5659 31.0916 60.4625 29.5334 61.4132 28.9497ZM45.1073 31.0732C46.6361 30.524 48.4518 31.1812 49.3231 32.5442C50.4725 34.2104 49.8609 36.7478 48.0773 37.7039C46.2292 38.8347 43.5305 37.8762 42.8479 35.8123C42.073 33.9647 43.2019 31.6524 45.1073 31.0732ZM36.1379 31.2549C37.8321 30.4552 40.1123 31.1261 40.9307 32.8593C41.8938 34.5462 41.1491 36.8952 39.4273 37.7663C37.7033 38.7453 35.2712 38.0031 34.4369 36.1919C33.5013 34.4404 34.3321 32.0614 36.1379 31.2549ZM27.1568 34.3254C27.2856 33.2338 28.3154 32.5234 29.3544 32.45C30.4738 32.585 31.368 33.4544 31.4898 34.5873C31.4164 35.7089 30.5497 36.8051 29.3611 36.7983C28.0535 36.9109 26.9071 35.61 27.1568 34.3254ZM53.6839 32.6873C55.0263 31.9059 56.8904 33.0434 56.8307 34.5857C56.9228 36.2197 54.8597 37.3713 53.523 36.4128C52.1343 35.6146 52.2426 33.3669 53.6839 32.6873ZM32.4877 38.4464C34.0578 38.0144 35.853 38.7545 36.6231 40.1976C37.4666 41.6502 37.1218 43.6682 35.8117 44.7336C34.1315 46.2964 31.0327 45.6689 30.1385 43.5362C29.1108 41.5811 30.3591 38.961 32.4877 38.4464ZM49.5002 38.4383C51.0265 38.0017 52.8196 38.59 53.6401 39.9805C54.725 41.5709 54.2071 43.9428 52.592 44.968C50.9002 46.1584 48.2795 45.5334 47.3486 43.672C46.22 41.7466 47.3556 39.0256 49.5002 38.4383ZM22.3894 40.2527C23.7456 39.7397 25.249 41.2363 24.6996 42.5809C24.364 43.8059 22.6376 44.2587 21.7458 43.3556C20.7022 42.5075 21.0886 40.6204 22.3894 40.2527ZM59.1501 42.204C59.1109 41.0803 59.9331 40.085 61.0854 40.0229C62.0142 40.1701 62.9174 40.9193 62.8439 41.9305C62.929 43.2659 61.3198 44.1737 60.182 43.5462C59.6487 43.2751 59.3752 42.7281 59.1501 42.204ZM15.721 40.9123C16.5369 40.5562 17.5462 41.2633 17.3599 42.1694C17.3161 43.1954 15.8014 43.5899 15.2449 42.7327C14.7533 42.1373 15.0476 41.2193 15.721 40.9123ZM67.1677 40.8918C67.7423 40.4827 68.6641 40.7768 68.8917 41.448C69.2778 42.1811 68.5698 43.1855 67.7447 43.0615C66.5864 43.1671 66.2117 41.4018 67.1677 40.8918ZM36.9195 45.8169C39.0666 45.2585 41.3745 47.0489 41.388 49.2597C41.5282 51.4937 39.255 53.4746 37.0572 52.9587C35.3584 52.6852 34.0254 51.0487 34.0805 49.332C34.0759 47.6901 35.3149 46.1641 36.9195 45.8169ZM45.4224 45.8123C47.6016 45.2032 49.9784 47.0257 49.9438 49.2875C50.0589 51.4801 47.8567 53.3945 45.7048 52.9595C43.6798 52.6976 42.1856 50.4728 42.751 48.5077C43.0364 47.1982 44.1304 46.1333 45.4224 45.8123ZM29.0282 47.1731C30.5362 46.9158 31.9499 48.5982 31.3383 50.03C30.8923 51.5557 28.6718 51.9697 27.6901 50.7233C26.5385 49.5264 27.3982 47.3383 29.0282 47.1731ZM53.9641 47.2403C55.3088 46.6771 56.9593 47.8403 56.8559 49.2996C56.9099 50.9061 54.8722 52.0139 53.5573 51.0762C52.0679 50.2344 52.339 47.7568 53.9641 47.2403ZM60.9339 54.2312C60.4074 53.2497 61.3638 51.9489 62.4535 52.1306C62.9959 52.1214 63.3753 52.5488 63.7225 52.9074C63.7938 53.489 63.9134 54.1829 63.4306 54.6311C62.7751 55.4608 61.2901 55.224 60.9339 54.2312ZM20.9827 52.4038C22.0012 51.7259 23.4667 52.737 23.2378 53.9277C23.116 54.9807 21.7895 55.5825 20.9158 54.985C19.9781 54.4426 20.0126 52.8982 20.9827 52.4038ZM41.1032 54.6081C42.4365 54.0198 44.135 55.1805 44.0087 56.649C44.1075 58.2718 42.0066 59.3955 40.7031 58.4211C39.255 57.5843 39.4964 55.1227 41.1032 54.6081ZM31.7841 56.7822C32.9197 56.1846 34.4436 57.2166 34.3402 58.4875C34.3748 59.531 33.3563 60.4204 32.3265 60.2662C31.4736 60.2479 30.9174 59.4832 30.6439 58.7561C30.6579 57.9637 30.9841 57.0811 31.7841 56.7822ZM50.661 56.8005C51.8287 56.0788 53.4884 57.1153 53.378 58.4745C53.4079 59.895 51.5322 60.8049 50.445 59.8718C49.3922 59.1403 49.5207 57.3821 50.661 56.8005ZM53.9436 64.9159C53.4241 64.13 54.0357 63.1831 54.8792 63.0038C55.5574 63.1418 56.2745 63.6518 56.132 64.438C56.0332 65.5021 54.4769 65.8285 53.9436 64.9159ZM27.8856 64.2334C28.0924 63.6105 28.5935 62.9914 29.3268 63.1534C30.3958 63.2292 30.713 64.8403 29.7775 65.3369C28.9361 65.9041 27.9601 65.1273 27.8856 64.2334ZM40.4571 64.9481C40.6617 64.0266 41.8546 63.5784 42.6408 64.0679C43.1603 64.2909 43.3121 64.8722 43.4455 65.3663C43.3742 65.6236 43.3104 65.8812 43.2478 66.1385C42.926 66.52 42.5123 66.9015 41.9766 66.8878C40.9812 67.0044 40.0831 65.879 40.4571 64.9481Z"
        fill="white"
      />
    </svg>
  );
};

export const Ftm = ({ customClass }: PropsIcon) => {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <g clipPath="url(#clip0_1139_336)">
        <path
          d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z"
          fill="#13B5EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.15 33.8625L54.6 28.35V39.375L45.15 33.8625ZM54.6 57.4875L42 64.8375L29.4 57.4875V44.625L42 51.975L54.6 44.625V57.4875ZM29.4 28.35L38.85 33.8625L29.4 39.375V28.35ZM43.575 36.4875L53.025 42L43.575 47.5125V36.4875ZM40.425 47.5125L30.975 42L40.425 36.4875V47.5125ZM53.025 25.725L42 32.025L30.975 25.725L42 19.1625L53.025 25.725ZM26.25 24.675V59.0625L42 67.9875L57.75 59.0625V24.675L42 15.75L26.25 24.675Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1139_336">
          <rect width="84" height="84" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Decentralized = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={customClass}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M344 280l88-88M232 216l64 64M80 320l104-104"
      />
      <circle
        cx="456"
        cy="168"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="320"
        cy="304"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="208"
        cy="192"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="56"
        cy="344"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export const Stopwatch = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={customClass}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 232v-80"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M256 88V72M132 132l-12-12"
      />
      <circle
        cx="256"
        cy="272"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        d="M256 96a176 176 0 10176 176A176 176 0 00256 96z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
};

export const Bolt = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
};

export const Close = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
