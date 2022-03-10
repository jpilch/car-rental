"""reattach drive cat column 

Revision ID: 68215791eac3
Revises: 46a7d74dcb14
Create Date: 2022-03-10 15:51:25.663704

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '68215791eac3'
down_revision = '46a7d74dcb14'
branch_labels = None
depends_on = None


def upgrade():
    drive_cat = postgresql.ENUM('FWD', 'RWS', 'AWD', name='drive_cat')
    drive_cat.create(op.get_bind())
    op.add_column('model', sa.Column('drive_cat', sa.Enum('FWD', 'RWD', 'AWD', name='drive_cat'), nullable=True))

def downgrade():
    pass
