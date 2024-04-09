import { Container } from "@radix-ui/themes";

import styles from "./template.module.scss";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Container className={styles.component}>{children}</Container>;
}
