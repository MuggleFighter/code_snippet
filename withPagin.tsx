import React from 'react';
import { IPaginationPureProps, Pagination } from '@muya-ui/core';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

interface ILoading  {
    loading?: boolean
}

const withPagin = <T,>(
    Comp: React.ComponentType<T>,
    defaultPaginProps: IPaginationPureProps = {
        pageSize: 10,
        showQuickJumper: true,
        totalRecords: 10
    }
): React.FC<T & {pagination: IPaginationPureProps} & ILoading> => ({pagination, ...rest }) => (
    <>
        {/* @ts-ignore */}
        <Comp {...rest} />
        <PaginationContainer>
            <Pagination
                {...defaultPaginProps}
                {...pagination}
            />
        </PaginationContainer>
    </>
);

export default withPagin;
