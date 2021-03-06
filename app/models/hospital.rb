class Hospital < ApplicationRecord
  has_many :calls
  has_many :users
  validates :name, :address, presence: true

  has_one_attached :photo
end
