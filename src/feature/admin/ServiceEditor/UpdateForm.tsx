import { ExpendablePanel } from "@src/common/component/ExpendablePanel";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Button } from "@src/common/element/Button";
import { Form } from "@src/common/element/Form";
import { Input } from "@src/common/element/Input";
import { Label } from "@src/common/element/Label";
import { H2, Span, TextArea } from "@src/common/element/text";
import { FlexColumn, FlexRow } from "@src/common/layout/flex";
import { AllAPIServicesUnion } from "@src/provider/APIServiceProvider/APIServiceProvider";
import { AbstractModel } from "@src/provider/APIServiceProvider/abstract-model";
import { AbstractService } from "@src/provider/APIServiceProvider/abstract-service";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledFlexRow = styled(FlexRow)`
  justify-content: space-between;
`;

type Props<M extends AbstractModel> = {
  service: AbstractService<M>;
};

export const UpdateForm = <M extends AbstractModel>({ service }: Props<M>) => {
  // All models
  const [models, setModels] = useState<Record<string, AbstractModel[]>>({});
  const [activeModelIdx, setActiveModelIdx] = useState<number>(0);
  useEffect(() => {
    service.findAllModelsByPartition().then((values) => {
      setModels(values);
    });
  }, [service]);

  // All partitionPaths of models
  const [partitionPaths, setPartitionPaths] = useState<string[]>([]);
  const [activeModelPartitionPathIdx, setActiveModelPartitionPathIdx] =
    useState<number>(0);

  // When models is populated
  useEffect(() => {
    const newPartitionPaths = Object.keys(models).sort();
    if (newPartitionPaths.length > 0) {
      setPartitionPaths(newPartitionPaths);
      setActiveModelPartitionPathIdx(0);
      setActiveModelIdx(0);
    }
  }, [models]);
  return (
    <FlexColumn>
      <H2>Models</H2>
      <StyledFlexRow>
        <Span>{"<"}</Span>
        <Span>
          {partitionPaths.length
            ? partitionPaths[activeModelPartitionPathIdx]
            : ""}
        </Span>
        <Span>{">"}</Span>
      </StyledFlexRow>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const values = Object.fromEntries(formData.entries());
          console.log(values);
        }}
      >
        {partitionPaths.length > 0 ? (
          <FlexColumn>
            {Object.entries(
              models[partitionPaths[activeModelPartitionPathIdx]][
                activeModelIdx
              ]
            ).map(([key, value], idx) => {
              return (
                <FlexRow key={idx}>
                  <Label htmlFor={key}>{key}: </Label>
                  {typeof value === "string" ? (
                    <TextArea id={key} defaultValue={value} />
                  ) : (
                    <Input
                      id={key}
                      type="text"
                      name={key}
                      defaultValue={
                        value instanceof Date ? value.toISOString() : value
                      }
                    />
                  )}
                </FlexRow>
              );
            })}
            <Button>Submit</Button>
          </FlexColumn>
        ) : (
          <LoadingSpinner />
        )}
      </Form>
    </FlexColumn>
  );
};
