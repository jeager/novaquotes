class Quote < ApplicationRecord
  belongs_to :user

  validates :user, :presence => { :message => "O usuário fornecido não foi encontrado!" }

  # Recebe uma quote e determina se precisa alterar a sua description.
  def parse_quote(user_name)
    user = nil
    text_array = []
    if ((self.description.include? 'by: @') || (self.description.include? 'by:@'))
      # text_array[0] = description, text_array[1] = username
      text_array = self.description.split('by:')
      text_array[0].rstrip!
      text_array[1].strip!
      self.description = text_array[0]
      user = User.find_by_slack_login(text_array[1])
    else
      user = User.find_by_slack_login(user_name)
    end
    client = Slack::Web::Client.new
    begin
      slack_user_name = text_array.empty? ? user_name : text_array[1]
      slack_user = client.users_info(user: slack_user_name)
      if user.nil?
        user = User.create(name: slack_user.user.real_name, photo: slack_user.user.profile.image_192, slack_login: slack_user_name)
      else
        user.update_attributes(name: slack_user.user.real_name, photo: slack_user.user.profile.image_192, slack_login: slack_user_name)
      end
      self.user_id = user.id
    rescue Slack::Web::Api::Errors::SlackError
      self.errors.add(:user_id, 'Usuário fornecido não encontrado')
    end
  end
end
