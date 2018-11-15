using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace kamerplantModel.Migrations
{
    public partial class AdminAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "adminID",
                table: "verlanglijstitem",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "adminID",
                table: "bestellingproduct",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "admin",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    naam = table.Column<string>(nullable: true),
                    adres = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    werknemersID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admin", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_verlanglijstitem_adminID",
                table: "verlanglijstitem",
                column: "adminID");

            migrationBuilder.CreateIndex(
                name: "IX_bestellingproduct_adminID",
                table: "bestellingproduct",
                column: "adminID");

            migrationBuilder.AddForeignKey(
                name: "FK_bestellingproduct_admin_adminID",
                table: "bestellingproduct",
                column: "adminID",
                principalTable: "admin",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_verlanglijstitem_admin_adminID",
                table: "verlanglijstitem",
                column: "adminID",
                principalTable: "admin",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_bestellingproduct_admin_adminID",
                table: "bestellingproduct");

            migrationBuilder.DropForeignKey(
                name: "FK_verlanglijstitem_admin_adminID",
                table: "verlanglijstitem");

            migrationBuilder.DropTable(
                name: "admin");

            migrationBuilder.DropIndex(
                name: "IX_verlanglijstitem_adminID",
                table: "verlanglijstitem");

            migrationBuilder.DropIndex(
                name: "IX_bestellingproduct_adminID",
                table: "bestellingproduct");

            migrationBuilder.DropColumn(
                name: "adminID",
                table: "verlanglijstitem");

            migrationBuilder.DropColumn(
                name: "adminID",
                table: "bestellingproduct");
        }
    }
}
