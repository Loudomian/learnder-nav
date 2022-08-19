import React from "react";
import {RounderBox} from "./primitives";
import {Image, Text} from "@chakra-ui/react";

interface Props {
    description: string;
}

const ContentTop: React.FC<Props> = ({description}) => {
    return (
        <RounderBox
            height="150px"
            bgImage="./header.jpg"
            bgSize="cover"
            bgRepeat="no-repeat"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Image
                src="./learnder.png"
            >
            </Image>
            <Text
                fontSize="16px"
                color="#fff"
            >
                {description}
            </Text>
        </RounderBox>
    );
};

export default ContentTop;
