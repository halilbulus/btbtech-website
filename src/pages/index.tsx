// src/pages/index.tsx
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/tr", // Default dil TR ise böyle kalsın. EN istiyorsan "/en" yap.
      permanent: false,
    },
  };
};

export default function Home() {
  return null;
}
