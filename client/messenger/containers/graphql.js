const messageFields = `
  _id
  conversationId
  user {
    _id
    details {
      avatar
      fullName
    }
  }
  content
  createdAt
  internal
  engageData {
    content
    kind
    sentAs
    fromUser {
      details {
        fullName
        avatar
      }
    }
    messageId
    brandId
  }
  attachments
`;


const conversationDetailQuery = `
  query ($_id: String!) {
    conversationDetail(_id: $_id) {
      _id
      content
      messages {
        ${messageFields}
      }
    }
  }
`;

const conversationLastStaffQuery = `
  query ($_id: String) {
    conversationLastStaff(_id: $_id) {
      _id,
      details {
        avatar
        fullName
      }
    }
  }
`;

const isMessengerOnlineQuery = `
  query ($integrationId: String!) {
    isMessengerOnline(integrationId: $integrationId)
  }
`;

const conversationMessageInserted = `
  subscription conversationMessageInserted($_id: String!) {
    conversationMessageInserted(_id: $_id) {
      ${messageFields}
    }
  }
`;

const unreadCountQuery = `
  query unreadCount($conversationId: String) {
    unreadCount(conversationId: $conversationId)
  }
`;

const conversationsChangedSubscription = `
  subscription conversationsChanged($customerId: String) {
    conversationsChanged(customerId: $customerId) {
      type
    }
  }
`;

export default {
  messageFields,
  conversationDetailQuery,
  conversationLastStaffQuery,
  isMessengerOnlineQuery,
  unreadCountQuery,
  conversationMessageInserted,
  conversationsChangedSubscription,
}
