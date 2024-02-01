import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { text } from 'src/configs/text';
import * as SC from './styles';

export default function SortOptions() {
  const [, setSearchParams] = useSearchParams();

  const [popularity, setPopularity] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.popularity, 0)),
  );
  const [quality, setQuality] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.quality, 0)),
  );
  const [maintenance, setMaintenance] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.maintenance, 0)),
  );

  const isSortAvailable = popularity || quality || maintenance;

  const onPopularityChange = (value: string) => {
    setPopularity(Number(value));
  };

  const onQualityChange = (value: string) => {
    setQuality(Number(value));
  };

  const onMaintenanceChange = (value: string) => {
    setMaintenance(Number(value));
  };

  const onSortClick = () => {
    if (isSortAvailable) {
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.popularity, String(popularity));
        return params;
      });
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.quality, String(quality));
        return params;
      });
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.maintenance, String(maintenance));
        return params;
      });
    }
  };

  return (
    <SC.SortOptionsAside>
      <SC.SortPackagesContainer>
        <SC.Title>{text.sortPackages}</SC.Title>
        <SC.StyledSortButton onClick={onSortClick}>{text.sort}</SC.StyledSortButton>
      </SC.SortPackagesContainer>
      <SC.SliderLabel htmlFor={text.popularity}>{text.popularity}</SC.SliderLabel>
      <SC.Slider
        id={text.popularity}
        value={popularity}
        onChange={(e) => onPopularityChange(e.target.value)}
        css={(theme) => ({
          color: theme.colors.c7,
        })}
      />
      <SC.SliderLabel htmlFor={text.quality}>{text.quality}</SC.SliderLabel>
      <SC.Slider
        id={text.quality}
        value={quality}
        onChange={(e) => onQualityChange(e.target.value)}
        css={(theme) => ({
          color: theme.colors.c8,
        })}
      />
      <SC.SliderLabel htmlFor={text.maintenance}>{text.maintenance}</SC.SliderLabel>
      <SC.Slider
        id={text.maintenance}
        value={maintenance}
        onChange={(e) => onMaintenanceChange(e.target.value)}
        css={(theme) => ({
          color: theme.colors.c9,
        })}
      />
    </SC.SortOptionsAside>
  );
}
