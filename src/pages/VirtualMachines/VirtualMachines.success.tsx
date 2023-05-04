import React from 'react';
import Table from 'src/components/Table';
import { TVirtualMachinesSuccessProps } from './VirtualMachines.types';
import ProvisionScn from './ProvisionScn';
import { DefaultService, GetSecureComputationNode_Out } from 'src/client';
import Text from 'src/components/Text';

const VirtualMachineSuccess: React.FC<TVirtualMachinesSuccessProps> = ({
  getAllVirtualMachinesData,
  refetch
}) => {
  interface UrlCellProps {
    cell: {
      value: string;
    };
  }

  interface DeleteScnProps {
    cell: {
      value: string;
    };
  }

  const UrlCell: React.FC<UrlCellProps> = ({ cell: { value } }) => {
    if (value && value !== '0.0.0.0') {
      const notebook_url = `https://${value}:8888/`;
      return (
        <a href={notebook_url} target="_blank" rel="noopener noreferrer">
          Open Notebook
        </a>
      );
    }
    return <></>;
  };

  const DeleteScn: React.FC<DeleteScnProps> = ({ cell: { value } }) => {
    const ipaddress = value.split(' ')[1];
    if (ipaddress && ipaddress !== '0.0.0.0') {
      const deleteScn = async () => {
        await DefaultService.deprovisionSecureComputationNode(
          value.split(' ')[0]
        );
        refetch();
      };

      return (
        <Text color="red" onClick={deleteScn}>
          Delete
        </Text>
      );
    }
    return <></>;
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Start Time',
        accessor: 'timestamp'
      },
      {
        Header: 'State',
        accessor: 'state'
      },
      {
        Header: 'Data Federation',
        accessor: 'data_federation.name'
      },
      {
        Header: 'Delete',
        Cell: DeleteScn,
        id: 'delete',
        accessor: (row: GetSecureComputationNode_Out) =>
          `${row.id} ${row.ipaddress}`
      },
      {
        Header: 'Notebook',
        accessor: 'ipaddress',
        Cell: UrlCell
      }
    ],
    []
  );

  if (!getAllVirtualMachinesData?.secure_computation_nodes)
    return <div>No data</div>;

  return (
    <>
      <ProvisionScn refetch={refetch} />
      <Table
        // @ts-ignore
        columns={columns}
        data={getAllVirtualMachinesData?.secure_computation_nodes}
      />
    </>
  );
};

export default VirtualMachineSuccess;
