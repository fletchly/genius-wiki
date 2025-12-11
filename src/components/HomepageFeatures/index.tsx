import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Lightweight",
    description: (
      <>
        Genius was designed to be as lightweight and unobtrusive as possible.
        The plugin will never send messages unprompted, and has nominal
        performance impact on your server when not in use.
      </>
    ),
  },
  {
    title: "Configurable",
    description: (
      <>
        Genius is highly configurable. From its system prompt, to response
        parameters, to display name in chat, you have full control over how
        Genius behaves.
      </>
    ),
  },
  {
    title: "Powered by Ollama",
    description: (
      <>
        At its core, Genius uses Ollama to generate responses. This puts
        Ollama's extensive library of LLMs at your fingertips for use in-game.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
