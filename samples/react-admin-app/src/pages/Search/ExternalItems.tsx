import { MgtTemplateProps } from '@microsoft/mgt-react';
import { SearchBox, SearchResults } from '@microsoft/mgt-react/dist/es6/generated/react-preview';

import * as React from 'react';

const entityTypes = ['externalItem'];
const scopes = ['ExternalItem.Read.All'];
const contentSources = ['/external/connections/contosopartsinventory'];

export const ExternalItems: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  return (
    <>
      <SearchBox searchTermChanged={e => setSearchTerm(e.detail)}></SearchBox>
      <SearchResults entityTypes={entityTypes} contentSources={contentSources} queryString={searchTerm} scopes={scopes}>
        <ExternalItemTemplate template="result-externalItem"></ExternalItemTemplate>
      </SearchResults>
    </>
  );
};

const ExternalItemTemplate = (props: MgtTemplateProps) => {
  const { resource } = props.dataContext;
  return (
    <div>
      <h2>{resource.properties.name}</h2>
      {resource.properties.description}
    </div>
  );
};
