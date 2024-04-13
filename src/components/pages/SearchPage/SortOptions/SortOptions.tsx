import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import { text } from 'src/configs/text';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import * as SC from './styles';

export default function SortOptions() {
  const [, setSearchParams] = useSearchParams();

  const [popularity, setPopularity] = useState(useUrlSearchParams().popularity);
  const [quality, setQuality] = useState(useUrlSearchParams().quality);
  const [maintenance, setMaintenance] = useState(useUrlSearchParams().maintenance);

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
      />
      <SC.SliderLabel htmlFor={text.quality}>{text.quality}</SC.SliderLabel>
      <SC.Slider
        id={text.quality}
        value={quality}
        onChange={(e) => onQualityChange(e.target.value)}
      />
      <SC.SliderLabel htmlFor={text.maintenance}>{text.maintenance}</SC.SliderLabel>
      <SC.Slider
        id={text.maintenance}
        value={maintenance}
        onChange={(e) => onMaintenanceChange(e.target.value)}
      />
    </SC.SortOptionsAside>
  );
}
