import React from "react";
import { Container, Skeleton } from "./style";

export default function Loading(): JSX.Element {
    return (
        <Container>
            <Skeleton className="img" />
            <Skeleton className="title" />
            <Skeleton className="text" />
        </Container>
    );
}
