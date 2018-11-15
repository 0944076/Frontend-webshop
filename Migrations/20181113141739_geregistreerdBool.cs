using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class geregistreerdBool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "geregistreerdeklantID",
                table: "bestelling");

            migrationBuilder.AddColumn<bool>(
                name: "geregistreerd",
                table: "bestelling",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "geregistreerd",
                table: "bestelling");

            migrationBuilder.AddColumn<int>(
                name: "geregistreerdeklantID",
                table: "bestelling",
                nullable: false,
                defaultValue: 0);
        }
    }
}
