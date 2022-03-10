"""empty message

Revision ID: 46a7d74dcb14
Revises: c606729ce427
Create Date: 2022-03-10 15:46:01.660348

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '46a7d74dcb14'
down_revision = 'c606729ce427'
branch_labels = None
depends_on = None


def upgrade():
    drive_cat = postgresql.ENUM('FWD', 'RWS', 'AWD', name='drive_cat')
    drive_cat.create(op.get_bind())
    op.add_column('model', sa.Column('drive_cat', sa.Enum('FWD', 'RWD', 'AWD', name='drive_cat'), nullable=True))


def downgrade():
    pass
