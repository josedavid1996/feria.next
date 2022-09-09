import { FieldError } from '../generated/graphql'

const mapGqlErrors = (errors: FieldError[]) => {
  const formatErrors: Record<string, string> = {}

  for (const error of errors) {
    formatErrors[error.field] = error.message
  }

  return formatErrors
}

export default mapGqlErrors
