import React, { useState } from "react";

// import { ImportBox, Title, WrapperFlex } from "componentes-lib";

import { ImportBox } from "../ImportBox";
import { Title } from "../Title";
import { WrapperFlex } from "../WrapperFlex";


function ImportarArquivo({ onClick, text, alert }) {
  const [files, setFiles] = useState([]);

  return (
    <WrapperFlex justifyCenter column>
      <Title text="Envio de arquivos" color="#ffc900" marginTop={30} />
      <ImportBox
        setFiles={setFiles}
        maxWidth={600}
        applyValidation={false}
        customValidations={(f) => {}}
      />
    </WrapperFlex>
  );
}

export default ImportarArquivo;
