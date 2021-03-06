class Todo < ApplicationRecord
  has_many :todo_comments, dependent: :destroy  
  validates :name, :description, presence: true
  validates :name, length: { minimum: 4, maximum: 100}
  validates :priority, inclusion: { in: ['H', 'M', 'L'], message: "Please select a valid priority"}

  scope :created_after, -> (my_time) {where("created_at >= ?", my_time) }
  scope :high_priority, -> {where (priority: "H")}
end
