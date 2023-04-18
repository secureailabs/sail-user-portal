import React from 'react';
import Series from 'src/pages/DataModels/Series';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/material/Icon';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TDataFrameSuccessProps } from './DataFrame.types';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

const DataFrameSuccess: React.FC<TDataFrameSuccessProps> = ({
  getDataFrameData
}) => {
  const [dataframe, setDataframe] = React.useState<string | false>('');

  const handleDataframeChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setDataframe(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={dataframe === 'panel2'}
      onChange={handleDataframeChange('panel2')}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>
          {getDataFrameData.name} : {getDataFrameData.description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {getDataFrameData.data_model_series.map((series_id) => (
          <Series series_id={series_id} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DataFrameSuccess;
