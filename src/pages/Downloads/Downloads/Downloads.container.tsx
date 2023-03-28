import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { TGetAllDownloadsSuccess } from 'src/pages/Downloads/Download/Download.types';
import { getAllDownloadsAPIDemo } from 'src/pages/Downloads/Download/Download.container';

import Downloads from './Downloads.component';

const DownloadsContainer: React.FC = () => {
    const { data, isLoading, status, error, refetch} =
    // @ts-ignore
    useQuery<TGetAllDownloadsSuccess['downloads'], AxiosError>(['downloads'], getAllDownloadsAPIDemo, { refetchOnMount: 'always' });
    //@ts-ignore
    return Downloads({ status: status, getAllDownloadsData: data, error: error })
}

export default DownloadsContainer;
