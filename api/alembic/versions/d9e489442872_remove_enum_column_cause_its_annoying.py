"""remove enum column cause its annoying

Revision ID: d9e489442872
Revises: 68215791eac3
Create Date: 2022-03-10 16:32:57.032996

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd9e489442872'
down_revision = '68215791eac3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('model', 'drive_cat')
    op.add_column('model', sa.Column('drive_cat', sa.String(length=3), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###