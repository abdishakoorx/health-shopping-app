"use client";
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge
} from '@mui/material';
import { Menu, ShoppingCart as CartIcon, Close } from '@mui/icons-material';
import ShoppingCartUI from './ShoppingCart';
import { ThemeToggle } from '../ui/theme-toggle';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Shop', href: '/products' },
    { text: 'Contact', href: '/contact' },
  ];

  const { cartCount } = useCart()

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-white dark:text-white text-black dark:bg-darkBackground backdrop-blur-sm border-b border-border dark:border-primary-dark md:px-10 shadow-none"
      >
        <Toolbar className="flex justify-between">
          <Link href="/" className="no-underline">
            <span className="text-3xl font-extrabold text-primary dark:text-primary-dark font-mono">
              HealthPlus-
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {menuItems.map((item) => (
              <Link key={item.text} href={item.href} className="no-underline">
                <Button className="hover:text-primary dark:hover:text-primary-dark text-black dark:text-white">
                  {item.text}
                </Button>
              </Link>
            ))}
            <IconButton
              onClick={() => setCartOpen(true)}
            >
              <Badge
                badgeContent={cartCount}
                className="text-primary dark:text-primary-dark"
              >
                <CartIcon />
              </Badge>
            </IconButton>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden gap-2 items-center">
            <IconButton
              onClick={() => setCartOpen(true)}
            >
              <Badge
                badgeContent={cartCount}
                className="text-primary dark:text-primary-dark"
              >
                <CartIcon />
              </Badge>
            </IconButton>
            <ThemeToggle />
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              className="text-black dark:text-white"
            >
              <Menu />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          className: "w-full max-w-[300px] bg-white dark:bg-black dark:text-white"
        }}
      >
        <div className="p-2 flex justify-end">
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <Close className="text-black dark:text-white" />
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white dark:bg-black dark:text-white text-black no-underline hover:bg-muted/50 dark:hover:bg-primary/20"
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <ShoppingCartUI open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}