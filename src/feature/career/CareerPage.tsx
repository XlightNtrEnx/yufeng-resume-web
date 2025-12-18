import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";

import { PreviewCard } from "@src/common/component/PreviewCard";
import { APIServiceContext } from "@src/provider/APIServiceProvider";
import { Career as CareerModel } from "@src/provider/APIServiceProvider/career/career-model";
import { Career as CareerComponent } from "./careers/career-components/Career";
import {
  Preview,
  PreviewType,
} from "@src/provider/APIServiceProvider/preview/preview-model";

const careerParam = "career";
export const CareerPage = () => {
  const { previewService, careerService } = useContext(APIServiceContext);

  // Get all Preview
  const [previews, setPreviews] = useState<Preview[]>([]);

  useEffect(() => {
    previewService
      .getPartition({ type: PreviewType.Career })
      .then((previews) => {
        previews.sort((a, b) => a.name.localeCompare(b.name));
        setPreviews(previews);
      });
  }, [previewService]);

  // Build a map of the previews array, mapping each value's name to its index in the array
  const previewNameToIdx = useMemo(() => {
    const map = new Map<string, number>();
    previews.forEach((value, idx) => map.set(value.name, idx));
    return map;
  }, [previews]);

  // Which preview is being displayed (reflected in URL params)
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePreviewIdx, setActivePreviewIdx] = useState<number | null>(null);
  useEffect(() => {
    setActivePreviewIdx(
      previewNameToIdx.get(searchParams.get(careerParam) || "") ?? null
    );
  }, [previewNameToIdx, searchParams]);

  // Fetch the career for the active preview
  const [career, setCareer] = useState<null | CareerModel>(null);
  useEffect(() => {
    if (activePreviewIdx != null) {
      const activePreview = previews[activePreviewIdx];
      careerService
        .getPartition({ preview_id: activePreview.id })
        .then((partitionCareers) => {
          setCareer(partitionCareers[0]);
        });
    }
  }, [activePreviewIdx, careerService, previews]);

  return (
    <>
      {previews.length > 0 ? (
        <ColumnGrid>
          {previews.map((category, index) => (
            <PreviewCard
              onClick={() => {
                setActivePreviewIdx(index);
                setSearchParams((prev) => {
                  prev.set(careerParam, category.name);
                  return prev;
                });
              }}
              src={category.image_url}
              key={index}
              title={category.name}
            />
          ))}
        </ColumnGrid>
      ) : (
        <LoadingSpinner />
      )}
      {typeof activePreviewIdx === "number" && (
        <Modal
          closer={() => {
            setActivePreviewIdx(null);
            setSearchParams((prev) => {
              prev.delete(careerParam);
              return prev;
            });
          }}
        >
          {!career ? (
            <LoadingSpinner />
          ) : (
            <>
              <CareerComponent
                name={career.name}
                description={career.description}
                medias={career.medias}
                urls={career.urls}
                projectIds={career.project_ids}
                projectPreviewIds={career.project_preview_ids}
              />
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default CareerPage;
