""""-m"

Revision ID: 640ae0178b8d
Revises: 34a1de6f3e07
Create Date: 2022-03-09 10:13:05.800589

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '640ae0178b8d'
down_revision = '34a1de6f3e07'
branch_labels = None
depends_on = None


def upgrade():
    drive_cat = postgresql.ENUM('fwd', 'rwd', 'awd', name='drive_cat')
    drive_cat.create(op.get_bind())
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('model', sa.Column('length', sa.Integer(), nullable=True))
    op.add_column('model', sa.Column('drive_cat', sa.Enum('fwd', 'rwd', 'awd', name='drive_cat'), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('model', 'drive_cat')
    op.drop_column('model', 'length')
    # ### end Alembic commands ###
