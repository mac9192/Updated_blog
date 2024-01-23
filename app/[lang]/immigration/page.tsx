import {getDictionary} from '../../../lib/getDictionary'
import HomeBlog from '@frontComponents/HomeBlog'
import HeaderImmigration from '../../../servicesComponents/HeaderImmigration'
import ServiceCardsImmigration from '@servicesComponents/ServiceCardsImmigration'
import TestimonialsImmigration from '@servicesComponents/TestimonialsImmigration'


const Immigration = async ({
    params,
  }: {
    params: {
      lang: string;
      };
  }) => {

    const locale = params.lang

    const dictionary = await getDictionary(locale)
    
    return (
 

<div>
        <HeaderImmigration />
        <ServiceCardsImmigration />
        <TestimonialsImmigration />
        
 </div>
    )
}

export default Immigration

