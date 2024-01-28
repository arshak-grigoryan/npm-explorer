import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import colors from 'src/styles/colors';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { text } from 'src/configs/configs';
import Typography from 'src/components/common/Typography/Typography';
import { Slider, SliderLabel, StyledSortButton } from './styled';

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
    <aside
      style={{
        padding: '16px',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Typography
          style={{
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          {text.sortPackages}
        </Typography>
        <StyledSortButton
          onClick={onSortClick}
          style={{
            fontSize: '0.875rem',
            fontWeight: 700,
          }}
        >
          {text.sort}
        </StyledSortButton>
      </div>
      <SliderLabel htmlFor={text.popularity}>{text.popularity}</SliderLabel>
      <Slider
        id={text.popularity}
        value={popularity}
        onChange={(e) => onPopularityChange(e.target.value)}
        style={{
          color: colors.c7,
        }}
      />
      <SliderLabel htmlFor={text.quality}>{text.quality}</SliderLabel>
      <Slider
        id={text.quality}
        value={quality}
        onChange={(e) => onQualityChange(e.target.value)}
        style={{
          color: colors.c8,
        }}
      />
      <SliderLabel htmlFor={text.maintenance}>{text.maintenance}</SliderLabel>
      <Slider
        id={text.maintenance}
        value={maintenance}
        onChange={(e) => onMaintenanceChange(e.target.value)}
        style={{
          color: colors.c9,
        }}
      />
    </aside>
  );
}
