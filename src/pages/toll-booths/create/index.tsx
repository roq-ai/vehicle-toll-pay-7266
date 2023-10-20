import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { tollBoothValidationSchema } from 'validationSchema/toll-booths';
import { OperatorInterface } from 'interfaces/operator';
import { TollBoothInterface } from 'interfaces/toll-booth';

function TollBoothCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: TollBoothInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.toll_booth.create({ data: values as RoqTypes.toll_booth });
      resetForm();
      router.push('/toll-booths');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TollBoothInterface>({
    initialValues: {
      location: '',
      status: '',
      toll_amount: 0,
      operational_hours: '',
      operator_id: (router.query.operator_id as string) ?? null,
    },
    validationSchema: tollBoothValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Toll Booths',
              link: '/toll-booths',
            },
            {
              label: 'Create Toll Booth',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Toll Booth
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.location}
            label={'Location'}
            props={{
              name: 'location',
              placeholder: 'Location',
              value: formik.values?.location,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Toll Amount"
            formControlProps={{
              id: 'toll_amount',
              isInvalid: !!formik.errors?.toll_amount,
            }}
            name="toll_amount"
            error={formik.errors?.toll_amount}
            value={formik.values?.toll_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('toll_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.operational_hours}
            label={'Operational Hours'}
            props={{
              name: 'operational_hours',
              placeholder: 'Operational Hours',
              value: formik.values?.operational_hours,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OperatorInterface>
            formik={formik}
            name={'operator_id'}
            label={'Select Operator'}
            placeholder={'Select Operator'}
            fetcher={() => roqClient.operator.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/toll-booths')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'toll_booth',
    operation: AccessOperationEnum.CREATE,
  }),
)(TollBoothCreatePage);
