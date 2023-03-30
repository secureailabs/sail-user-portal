/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import Table from 'src/components/Table';
import {
  TVirtualMachinesSuccessProps,
  TGetAllVirtualMachinesSuccess
} from './VirtualMachines.types';
import TableFilter from 'src/components/TableFilter';
import Margin from 'src/components/Margin';
import { Link } from 'react-router-dom';

const VirtualMachineSuccess: React.FC<TVirtualMachinesSuccessProps> = ({
  getAllVirtualMachinesData,
  userData
}) => {
  const demo = localStorage.getItem('mode') == 'demo';

  const columns = React.useMemo(
    () => [
      {
        Header: 'IP Address',
        accessor: 'ipaddress',
        width: 100
      },
      {
        Header: 'Region',
        accessor: 'region',
        width: 100
      },
      {
        Header: 'Confidential VM Type',
        accessor: 'type',
        width: 100
      },
      {
        Header: 'Launched By',
        accessor: 'launched_by',
        width: 100,

        // @ts-ignore
        Cell: ({ value }) => (
          <div>
            {value.user_name}
            <br />
            <Link
              className="unified-registry-card__link"
              to={'../organizations/' + value.org_id}
            >
              {value.org_name}
            </Link>
          </div>
        )
      },
      {
        Header: 'Status',
        accessor: 'state',
        width: 100
      },
      {
        Header: 'Uptime',
        accessor: 'uptime',
        width: 100
      },
      {
        Header: 'Actions',
        Cell: () => (
          <a href="#" className="unified-registry-card__link">
            Shutdown
          </a>
        )
      }
    ],
    []
  );

  const filters: {
    name: string;
    value: string;
    count: number;
  }[] = [
    {
      name: 'Launched by me',
      value: '0',
      count: 0
    },
    {
      name: 'Launched by ' + userData?.organization.name,
      value: '1',
      count: 0
    }
  ];

  const filteredData: TGetAllVirtualMachinesSuccess['secure_computation_nodes'][] =
    [[], []];

  const filterFunction = (
    data: TGetAllVirtualMachinesSuccess
  ): TGetAllVirtualMachinesSuccess => {
    if (!data.secure_computation_nodes) {
      return { secure_computation_nodes: [] };
    }

    data.secure_computation_nodes.forEach((elem) => {
      if (userData && elem.launched_by?.user_email == userData.email) {
        filters[0].count += 1;
        filteredData[0].push(elem);
      } else if (
        userData &&
        (elem.launched_by?.org_id == userData.organization.id ||
          (demo && elem.launched_by?.org_name == userData.organization.name))
      ) {
        filters[1].count += 1;
        filteredData[1].push(elem);
      } else if (
        demo &&
        userData &&
        userData.role == 'ADMIN' &&
        userData.name == 'Sallie Director' &&
        (elem.data_owner.id == userData.organization.id ||
          (demo && elem.data_owner.name == userData.organization.name))
      ) {
        let filterIndex = filters.length;

        filters.every((filterElem, index) => {
          if (filterElem.name == 'Launched for Kidney Cancer Consortium') {
            filterIndex = index;
            return false; // break
          }
        });

        if (filterIndex == filters.length) {
          filters.push({
            name: 'Launched for Kidney Cancer Consortium',
            value: filterIndex.toString(),
            count: 0
          });

          filteredData.push([]);
        }

        filters[filterIndex].count += 1;
        filteredData[filterIndex].push(elem);
      }
    });
    return data;
  };

  const [current_filter, setCurrentFilter] = useState('0');
  filterFunction(getAllVirtualMachinesData);

  return (
    <>
      <TableFilter
        current_filter={current_filter}
        setCurrentFilter={setCurrentFilter}
        filters={filters}
      />
      <Margin size={5} />
      <Table columns={columns} data={filteredData[parseInt(current_filter)]} />
    </>
  );
};

export default VirtualMachineSuccess;
