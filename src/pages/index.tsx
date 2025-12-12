import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quickstart"
          >
            Quickstart 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function DemoVideo() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        {/* Demo heading */}
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Demo</Heading>
        </div>

        {/* Perfectly centered + nicely sized video */}
        <div className="row">
          <div className="col col--8 col--offset-2">
            {/* Change col--8 → col--10 for a bit wider, col--6 for narrower */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9
                height: 0,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/xHKZ-8uYC8w"
                title="Genius Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </div>
        </div>
        <p className="text--center margin-top--md text--italic">
          See Genius in action
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for the Genius plugin"
    >
      <HomepageHeader />
      <main>
        <DemoVideo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
