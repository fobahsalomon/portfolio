import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";

export default function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Home />
      </Layout>
    </LanguageProvider>
  );
}
