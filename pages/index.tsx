"use client";
import { Inter } from "next/font/google";
import * as React from "react";
import { Squash as Hamburger } from "hamburger-react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import { Carousel } from "antd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SocialIcon } from "react-social-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="flex justify-between p-3 shadow">
        <a href="#">
          <img src="/logo-tripoli.png" width={100} height={100} />
        </a>
        <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
      </nav>
      <div className="flex w-full justify-center p-3">
        <img src="/365logo.png" />
      </div>
      <div className="flex flex-col p-2">
        <div className="text-xl text-center">PIZZA</div>
        <Carousel autoplay>
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
        </Carousel>
      </div>
      <div className="flex flex-col p-2">
        <div className="text-xl text-center">CAKES</div>
        <Carousel autoplay>
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
        </Carousel>
      </div>
      <div className="flex flex-col p-2">
        <div className="text-xl text-center">PASTERIES</div>
        <Carousel autoplay>
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
        </Carousel>
      </div>
      <div className="flex flex-col p-2">
        <div className="text-xl text-center">BREAD</div>
        <Carousel autoplay>
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
          <img src="/logo-tripoli.png" />
        </Carousel>
      </div>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col w-44">
          <div className="flex justify-end p-4 w-full">
            <IconButton onClick={() => setIsOpen(false)}>
              <ArrowBackIcon />
            </IconButton>
          </div>
          <Divider />
          <List className="w-full">
            <ListItemButton className="justify-end">Menu</ListItemButton>
            <ListItemButton className="justify-end">Gifts</ListItemButton>
            <ListItemButton className="justify-end">Delivery</ListItemButton>
            <ListItemButton className="justify-end">Order</ListItemButton>
            <ListItemButton className="justify-end">Jobs</ListItemButton>
          </List>
          <Divider />
        </div>
      </Drawer>
      <footer className="flex flex-col items-center text-center">
        <div className="flex flex-col p-2">
          <div className="w-full text-red-500">CONNECT WITH US</div>
          <div className="flex">
            <IconButton>
              <SocialIcon url="https://www.facebook.com/tripolipizzabakery/" />
            </IconButton>
            <IconButton>
              <SocialIcon url="https://www.instagram.com/tripolipizzabakery/?hl=en" />
            </IconButton>
            <IconButton>
              <SocialIcon url="https://twitter.com/tripolipizza?lang=en" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <div className="w-full text-red-500">LOCATIONS</div>
          <span>Lawrence</span>
          <span>Methuen</span>
          <span>North Andover</span>
          <span>Salisbury</span>
          <span>Seabrook</span>
        </div>
        <div className="flex flex-col p-2">
          <div className="w-full text-red-500">©2023. all rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
