import React, { useState } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import DetailsDevolution from "./detailsdevolution";
import StatusDevolution from "./statusdevolution";

interface ProgressDevolutionProps {
 data?:DataFollow[];
 className?:string;
}

const ProgressDevolution: React.FC<ProgressDevolutionProps & { devolutionId?: string }> = ({ data, className, devolutionId }) => {   

 return (
    <>
        <Box typeBox="container-devolution" className="col-md-8">
            <StatusDevolution devolutionId={devolutionId} ></StatusDevolution>
            <DetailsDevolution devolutionId={devolutionId}></DetailsDevolution>
        </Box>
    </>
 );
};

export default ProgressDevolution;