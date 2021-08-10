import React from "react";
import { Flex, Text } from "../../components/lib/sck";

export const NotFound = () => {
    const styles = {
        wrapperNf: {
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            height: "80vh",
            justifyContent: "center"
        }
    }

    return (
        <div style={styles.wrapperNf}>
            <Flex justify="center" align="center" gap={5}>
                <Text size={20} bold>404</Text>
                <Text size={24}>|</Text>
                <Text size={20}>Страница не найдена!</Text>
            </Flex>
        </div>
    )
}