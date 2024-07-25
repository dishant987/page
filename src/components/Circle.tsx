"use client";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import { ConfettiBtn } from "./ConfigBtn";
import {
  ArrowBigLeft,
  ArrowBigLeftIcon,
  ArrowBigRight,
  ArrowLeftFromLine,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Hero } from "./Hero";

export function Circle() {
  return (
  <>
    <div className="relative flex h-screen gap-[24px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center md:text-[50px] text-[36px]  font-semibold leading-none text-transparent dark:from-white dark:to-black">
        We’ve really speed up our workflow
      </span>
      <p className=" md:p-2 p-5 text-[18px] md:text-sm text-center">
        <span className=" font-semibold">
          {" "}
          We’ve just released a new update!
        </span>{" "}
        Check out the all new dashboard view. Pages and now load faster.you can
        try us <br className=" hidden md:inline  " />
        for free for 30 days.
      </p>

      <p className="text-[16px] md:text-sm text-center">
        Join 4,000+ companies already growing
      </p>

      <div className=" md:flex-row  flex flex-col-reverse  gap-3">
        <Button className="bg-white z-10 border shadow-sm text-black w-full hover:bg-[#f2f1f1]">
          <ArrowRightIcon className="mr-2 h-5 w-5" /> Start Learning Today
        </Button>

        <ConfettiBtn   title={"Button"} />
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={180}
      >
        <Icons.metamask />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={180}
      >
        <Icons.css />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={300}
        duration={20}
        reverse
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={300}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.aws />
      </OrbitingCircles>
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={420}
        duration={20}
        delay={13}
      >
        <Icons.android />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={420}
        duration={20}
        delay={20}
      >
        <Icons.flutter />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={420}
        duration={20}
        delay={25}
      >
        <Icons.javascript />
      </OrbitingCircles>
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={540}
        duration={20}
        delay={13}
        reverse
      >
        <Icons.openai />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={540}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.html />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={540}
        duration={20}
        delay={25}
        reverse
      >
        <Icons.whatsapp />
      </OrbitingCircles>
    </div>
  
  </>
  );
}

const Icons = {
  html: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
        x1="18.208"
        x2="34.159"
        y1="2.413"
        y2="46.236"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f09701"></stop>
        <stop offset="1" stop-color="#e36001"></stop>
      </linearGradient>
      <path
        fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
        d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
      ></path>
      <path
        fill="#f09601"
        d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
      ></path>
      <path
        fill="#fff"
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
      ></path>
      <path
        fill="#d6e0e9"
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      ></path>
      <path
        d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
        opacity=".05"
      ></path>
      <path
        d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
        opacity=".07"
      ></path>
    </svg>
  ),

  android: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2232"
      height="2500"
      viewBox="32.163 68.509 203.691 228.155"
      id="android"
    >
      <path
        fill="#a4c639"
        d="M101.885 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24z"
      ></path>
      <path
        fill="#a4c639"
        d="M69.374 133.645c-.047.54-.088 1.086-.088 1.638v92.557c0 9.954 7.879 17.973 17.66 17.973h94.124c9.782 0 17.661-8.02 17.661-17.973v-92.557c0-.552-.02-1.1-.066-1.638H69.374z"
      ></path>
      <path
        fill="#a4c639"
        d="M166.133 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24zM46.405 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c-.001-7.865 6.375-14.242 14.241-14.242zM221.614 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c0-7.865 6.376-14.242 14.241-14.242zM69.79 127.565c.396-28.43 25.21-51.74 57.062-54.812h14.312c31.854 3.073 56.666 26.384 57.062 54.812H69.79z"
      ></path>
      <path
        fill="none"
        stroke="#a4c639"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M74.743 70.009l15.022 26.02M193.276 70.009l-15.023 26.02"
      ></path>
      <path
        fill="#fff"
        d="M114.878 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04zM169.874 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04z"
      ></path>
    </svg>
  ),
  flutter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="flutter"
    >
      <polygon
        fill="#0D47A1"
        points="11.536 21.231 14.305 24 21.695 24 15.232 17.537 11.536 21.231"
      ></polygon>
      <polygon
        fill="#42A5F5"
        points="7.849 17.538 11.539 13.848 15.229 17.538 11.539 21.229 7.849 17.538"
      ></polygon>
      <polygon
        fill="#5A9FD7"
        points="15.233 17.536 15.231 17.536 15.231 17.536 15.232 17.536 15.232 17.536 15.233 17.536"
      ></polygon>
      <polygon
        fill="#0B3E8C"
        points="15.372 17.677 17.02 19.337 13.11 20.688 12.054 21.744 11.54 21.23 11.536 21.231 14.305 24 21.695 24 15.372 17.677"
      ></polygon>
      <polygon
        fill="#3990D5"
        points="15.227 17.536 7.852 17.536 7.849 17.538 11.539 21.229 15.229 17.538 15.227 17.536"
      ></polygon>
      <path
        fill="#68B7F7"
        d="M21.695,11.073h-7.391l-2.768,2.768l3.694,3.694h0.002L21.695,11.073L21.695,11.073z M21.695,0h-7.391l-12,11.999L6,15.695L21.695,0L21.695,0z"
      ></path>
      <path
        fill="#5B9FD7"
        d="M20.844,11.073h-6.539l-2.768,2.768l3.694,3.694h0.002l5.611-5.611V11.073L20.844,11.073z M15.695,6H8.304l-5.999,5.999L6,15.695L15.695,6L15.695,6z"
      ></path>
    </svg>
  ),
  javascript: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="node-js">
      <path
        fill="#83CD29"
        d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
      ></path>
    </svg>
  ),
  metamask: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="212"
      height="189"
      viewBox="0 0 212 189"
      id="metamask"
    >
      <g fill="none" fill-rule="evenodd">
        <polygon
          fill="#CDBDB2"
          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
        ></polygon>
        <polygon
          fill="#CDBDB2"
          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
          transform="matrix(-1 0 0 1 256.5 0)"
        ></polygon>
        <polygon
          fill="#393939"
          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
        ></polygon>
        <polygon
          fill="#F89C35"
          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
        ></polygon>
        <polygon
          fill="#F89D35"
          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
        ></polygon>
        <polygon
          fill="#D87C30"
          points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
        ></polygon>
        <polygon
          fill="#EA8D3A"
          points="46.125 101.813 65.25 119.813 65.25 137.813"
        ></polygon>
        <polygon
          fill="#F89D35"
          points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
        ></polygon>
        <polygon
          fill="#EB8F35"
          points="65.25 138.375 60.75 173.25 90.563 152.438"
        ></polygon>
        <polygon
          fill="#EA8E3A"
          points="92.25 102.375 95.063 150.188 86.625 125.719"
        ></polygon>
        <polygon
          fill="#D87C30"
          points="39.375 138.938 65.25 138.375 60.75 173.25"
        ></polygon>
        <polygon
          fill="#EB8F35"
          points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
        ></polygon>
        <polygon
          fill="#E8821E"
          points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
        ></polygon>
        <polygon
          fill="#DFCEC3"
          points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
        ></polygon>
        <polygon
          fill="#DFCEC3"
          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
          transform="matrix(-1 0 0 1 272.25 0)"
        ></polygon>
        <polygon
          fill="#393939"
          points="70.313 112.5 64.125 125.438 86.063 119.813"
          transform="matrix(-1 0 0 1 150.188 0)"
        ></polygon>
        <polygon
          fill="#E88F35"
          points="12.375 .563 88.875 58.5 75.938 27"
        ></polygon>
        <path
          fill="#8E5A30"
          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
        ></path>
        <g transform="matrix(-1 0 0 1 211.5 0)">
          <polygon
            fill="#F89D35"
            points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
          ></polygon>
          <polygon
            fill="#D87C30"
            points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
          ></polygon>
          <polygon
            fill="#EA8D3A"
            points="46.125 101.813 65.25 119.813 65.25 137.813"
          ></polygon>
          <polygon
            fill="#F89D35"
            points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
          ></polygon>
          <polygon
            fill="#EB8F35"
            points="65.25 138.375 60.75 173.25 90 153"
          ></polygon>
          <polygon
            fill="#EA8E3A"
            points="92.25 102.375 95.063 150.188 86.625 125.719"
          ></polygon>
          <polygon
            fill="#D87C30"
            points="39.375 138.938 65.25 138.375 60.75 173.25"
          ></polygon>
          <polygon
            fill="#EB8F35"
            points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
          ></polygon>
          <polygon
            fill="#E8821E"
            points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
          ></polygon>
          <polygon
            fill="#393939"
            points="70.313 112.5 64.125 125.438 86.063 119.813"
            transform="matrix(-1 0 0 1 150.188 0)"
          ></polygon>
          <polygon
            fill="#E88F35"
            points="12.375 .563 88.875 58.5 75.938 27"
          ></polygon>
          <path
            fill="#8E5A30"
            d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
          ></path>
        </g>
      </g>
    </svg>
  ),
  aws: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="amazon-aws"
    >
      <polygon points="20.189 12.33 20.189 12.33 20.188 12.33"></polygon>
      <path d="M.106 14.677c3.13 2.855 7.272 4.573 11.87 4.573 3.28 0 7.096-1.04 9.722-3 .431-.323.056-.815-.383-.613-2.946 1.258-6.146 1.871-9.06 1.871-4.318 0-8.493-1.202-11.877-3.186C.082 14.145-.141 14.452.106 14.677zM17.181 5.16c0-.136-.073-.202-.2-.202H16.24c-.011-.001-.023-.001-.034-.001-.104 0-.2.03-.279.082-.056.048-.112.154-.16.315l-1.381 5.403-1.261-5.403c-.031-.154-.088-.267-.151-.315-.064-.056-.168-.081-.32-.081h-.636c-.012-.001-.023-.001-.035-.001-.106 0-.205.03-.287.082-.063.048-.111.154-.151.315L10.3 10.693 8.958 5.354c-.047-.154-.095-.267-.16-.315-.055-.056-.159-.081-.31-.081H7.705c-.127 0-.191.073-.191.202l.001.006C7.527 5.28 7.552 5.39 7.586 5.484l1.875 6.235c.048.153.104.266.168.314.064.057.16.081.304.081l.686-.001c.143 0 .255-.024.32-.081.063-.057.11-.162.15-.323l1.23-5.193 1.238 5.201c.031.162.087.267.15.323.065.057.169.081.32.081h.686c.01.001.019.001.029.001.102 0 .197-.03.275-.082.064-.048.12-.153.168-.314l1.923-6.234L17.105 5.5c.025-.066.045-.133.059-.21C17.172 5.241 17.181 5.201 17.181 5.16zM21.682 10.202c0 .008 0 .014 0 .022 0 .314-.164.589-.415.744-.271.178-.663.267-1.165.267-.32 0-.631-.032-.95-.097-.312-.065-.607-.161-.878-.282-.08-.032-.152-.065-.2-.081-.048-.016-.096-.024-.144-.024-.119 0-.183.081-.183.25v.411c.001.082.018.16.048.226.032.073.119.154.247.225.208.121.519.226.918.323.399.096.813.144 1.228.144.408 0 .782-.057 1.141-.169.343-.105.638-.25.886-.452.247-.194.439-.435.583-.71.135-.274.207-.589.207-.936 0-.419-.12-.798-.367-1.129-.247-.33-.663-.589-1.237-.775l-1.134-.362c-.423-.137-.718-.291-.877-.445-.16-.153-.24-.347-.24-.573 0-.33.128-.564.375-.717.247-.154.607-.225 1.062-.225.018 0 .037 0 .056 0 .534 0 1.042.115 1.476.314l-.004-.002c.092.052.194.086.307.099.12 0 .184-.089.184-.259V5.614c.001-.008.001-.017.001-.026 0-.09-.027-.173-.072-.24l-.001-.002c-.063-.082-.143-.151-.239-.2C22.216 5.096 22.104 5.048 21.96 5c-.143-.047-.295-.088-.455-.128-.168-.032-.335-.065-.518-.089-.176-.024-.36-.032-.535-.032-.351 0-.686.041-1.006.137-.32.096-.59.233-.83.419-.24.177-.431.403-.575.661-.143.259-.216.557-.216.895.002.443.152.851.4 1.17.263.363.694.637 1.277.821l1.157.364c.391.129.663.267.807.419.134.14.216.332.216.543 0 .008 0 .014 0 .021C21.682 10.201 21.682 10.201 21.682 10.202z"></path>
      <path d="M22.424 18.169c1.405-1.193 1.772-3.685 1.485-4.048-.287-.355-2.754-.661-4.254.403-.232.17-.192.396.063.364.854-.105 2.738-.33 3.074.104.335.428-.375 2.227-.695 3.025C22.001 18.258 22.209 18.355 22.424 18.169zM4.52 7.944c-.295-.04-.574-.065-.846-.065-.822 0-1.468.21-1.955.629-.487.418-.726.976-.726 1.661 0 .646.199 1.162.59 1.549.391.387.926.58 1.596.58.942 0 1.725-.371 2.347-1.112l.016.037c.076.16.159.315.232.438l.006.01c.083.132.177.257.281.369C6.14 12.113 6.22 12.154 6.3 12.154h.001c.077-.003.149-.03.207-.073l.503-.338c.104-.081.152-.162.152-.242 0-.057-.016-.121-.056-.185-.112-.21-.192-.404-.256-.582-.056-.177-.088-.418-.088-.717l-.016.001V7.404c0-.887-.223-1.549-.662-1.983C5.638 4.985 4.944 4.767 3.994 4.767c-.015 0-.031 0-.046 0-.426 0-.84.056-1.2.153C2.357 5.017 2.022 5.138 1.743 5.283L1.739 5.284c-.085.037-.16.095-.22.167-.04.057-.056.154-.056.283v.395c0 .169.056.25.168.25h.001c.045-.002.088-.01.126-.023l.016-.004C1.87 6.321 1.963 6.286 2.038 6.25 2.317 6.137 2.605 6.048 2.9 5.975c.295-.073.583-.104.863-.104.614 0 1.045.12 1.3.371.248.25.375.677.375 1.29v.589C5.12 8.049 4.815 7.984 4.52 7.944zM5.455 9.025v.338c0 .274-.033.508-.08.701-.048.194-.144.364-.272.517C4.888 10.823 4.632 11 4.345 11.097c-.288.097-.559.145-.822.145-.368 0-.647-.097-.838-.299-.2-.193-.295-.476-.295-.855 0-.403.127-.709.39-.926.264-.218.655-.323 1.19-.323.265 0 .525.018.75.048l.034.004C5.008 8.925 5.257 8.973 5.455 9.025z"></path>
    </svg>
  ),
  css: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="css">
      <path fill="#2196F3" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path>
      <path
        fill="#FAFAFA"
        d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"
      ></path>
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  react: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 128 128"
      viewBox="0 0 128 128"
      id="react"
    >
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
      </g>
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
};
