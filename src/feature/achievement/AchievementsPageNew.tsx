import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { Modal } from "@src/common/component/Modal";
import { ColumnGrid } from "@src/common/layout/grid/ColumnGrid";

import { PreviewCard } from "@src/common/component/PreviewCard";
import { APIServiceContext } from "@src/provider/APIServiceProvider";
import { Achievement as AchievementModel } from "@src/provider/APIServiceProvider/achievement/achievement-model";
import {
  Preview,
  PreviewType,
} from "@src/provider/APIServiceProvider/preview/preview-model";
import { Achievement as AchievementComponent } from "./achievements/achievement-components";
import { AchievementsLayout } from "./achievements/achievement-components/AchievementsLayout";

const previewParam = "achievement";

export const AchievementsPageNew = () => {
  const { achievementService, previewService } = useContext(APIServiceContext);

  // Get all Preview
  const [previews, setPreviews] = useState<Preview[]>([]);
  useEffect(() => {
    previewService
      .getPartition({ type: PreviewType.Achievement })
      .then((values) => {
        values.sort((a, b) => a.name.localeCompare(b.name));
        setPreviews(values);
      });
  }, [previewService]);

  // Build a map of the achievementCategories array, mapping each value's name to its index in the array
  const previewNameToIdx = useMemo(() => {
    const map = new Map<string, number>();
    previews.forEach((value, idx) => map.set(value.name, idx));
    return map;
  }, [previews]);

  // Which category is currently being displayed (which is reflected in URL params)
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePreviewIdx, setActivePreviewIdx] = useState<number | null>(null);
  useEffect(() => {
    setActivePreviewIdx(
      previewNameToIdx.get(searchParams.get(previewParam) || "") ?? null
    );
  }, [previewNameToIdx, searchParams]);

  // Storing the achievements (fetched on demand and saved)
  const [activeAchievementModels, setActiveAchievementModels] = useState<
    AchievementModel[]
  >([]);
  const [fetchingActiveAchievementModels, setFetchingActiveAchievementModels] =
    useState<boolean>(false);
  useEffect(() => {
    if (activePreviewIdx != null) {
      setFetchingActiveAchievementModels(true);
      const activePreview = previews[activePreviewIdx];

      achievementService
        .getPartition({
          preview_id: activePreview.id,
        })
        .then((values) => {
          setActiveAchievementModels(values);
        })
        .finally(() => {
          setFetchingActiveAchievementModels(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePreviewIdx]);

  return (
    <>
      {previews.length > 0 ? (
        <ColumnGrid>
          {previews.map((category, index) => (
            <PreviewCard
              onClick={() => {
                setActivePreviewIdx(index);
                setSearchParams((prev) => {
                  prev.set(previewParam, category.name);
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
              prev.delete(previewParam);
              return prev;
            });
          }}
        >
          {fetchingActiveAchievementModels ? (
            <LoadingSpinner />
          ) : (
            <AchievementsLayout>
              <>
                {activeAchievementModels.map((achievementModel, idx) => {
                  return (
                    <AchievementComponent
                      key={idx}
                      name={achievementModel.name}
                      description={achievementModel.description}
                      medias={achievementModel.medias ?? []}
                      urls={achievementModel.urls}
                      projectId={achievementModel.project_id}
                      projectPreviewId={achievementModel.project_preview_id}
                    />
                  );
                })}
              </>
            </AchievementsLayout>
          )}
        </Modal>
      )}
    </>
  );
};

export default AchievementsPageNew;
